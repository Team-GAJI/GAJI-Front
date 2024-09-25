import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import StudyManageWeekManageDel from '../../assets/icons/studyManageWeek/StudyManageWeekDel.svg';
import StudyManageWeekManageManagePlus from '../../assets/icons/studyManageWeek/StudyManageWeekPlus.svg';

import ManageWeekBasics from './ui/ManageWeekBasics.jsx';
import StudyMangeWeekPeriod from './ui/StudyMangeWeekPeriod.jsx';
import ManageWeekeDetailed from './ui/ManageWeekDetailed.jsx';
import PageHeader from '../../components/common/PageHeader.jsx';
import { ContentWrapper70 } from '../../components/common/MediaWrapper.jsx';
// API
import { TaskAPI } from './api/TaskAPI.jsx';
import { descriptionAPI } from './api/descriptionAPI.jsx';
import { periodAPI } from './api/period.jsx';
import { assignmentsAPI } from './api/assignmentsAPI.jsx';
import { weekcountAPI } from './api/weekcountAPI.jsx';

import { setWeekData } from '../../redux/slice/studymanageweek/studymanageweekSlice.jsx';

const StudyManageWeeKPage = () => {
    const [weeks, setWeeks] = useState([0]);
    // const [weekData, setWeekData] = useState([]);
    const [selectedWeek, setSelectedWeek] = useState(0);
    const [activeButtonIndex, setActiveButtonIndex] = useState(0);
    const [studyPeriodStartDate, setStudyPeriodStartDate] = useState(null);
    const [studyPeriodEndDate, setStudyPeriodEndDate] = useState(null);

    const sidebarRef = useRef(null);
    const manageWeekDetailedRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();
    const roomId = location.state?.roomId || null;

    //새로고침하면 다 날아가ㅠㅠ

    // 주차 수 만큼! 사이드 창 버튼 만들기
    const fetchWeekCount = async () => {
        if (roomId) {
            try {
                const response = await weekcountAPI(roomId);
                const weekCount = response.result.weekCount;
                setWeeks([...Array(weekCount).keys()]);
            } catch (error) {
                console.error('API 요청 중 오류 발생:', error);
            }
        }
    };

    useEffect(() => {
        fetchWeekCount();
    }, [roomId]);

    // Redux에서 데이터 가져오기
    const weekData = useSelector((state) => state.studyWeek.weeksData[selectedWeek] || {});
    const dispatch = useDispatch();

    // 주차 데이터가 변경될 때 Redux에 저장
    const handleWeekDataChange = (newWeekData) => {
        dispatch(setWeekData({ weekIndex: selectedWeek, weekData: newWeekData }));
    };

    const fetchSelectedWeekData = async () => {
        try {
            const taskData = await TaskAPI(roomId, selectedWeek);
            const periodData = await periodAPI(roomId, selectedWeek);
            const assignments = await assignmentsAPI(roomId, selectedWeek);

            const newWeekData = {
                basicInfo: {
                    name: taskData?.title || '',
                    description: taskData?.content || '',
                },
                tasks: taskData?.tasks || [],
                studyPeriodStartDate: periodData?.studyPeriodStartDate
                    ? new Date(periodData.studyPeriodStartDate)
                    : null,
                studyPeriodEndDate: periodData?.studyPeriodEndDate ? new Date(periodData.studyPeriodEndDate) : null,
                assignments: assignments || [],
            };

            // Redux에 주차 데이터 저장
            dispatch(setWeekData({ weekIndex: selectedWeek, weekData: newWeekData }));
        } catch (error) {
            console.error('데이터 가져오기 오류:', error);
        }
    };

    useEffect(() => {
        fetchSelectedWeekData();
    }, [roomId, selectedWeek]);

    useEffect(() => {
        if (selectedWeek < weekData.length) {
            const newWeekData = weekData[selectedWeek] || {};
            setStudyPeriodStartDate(newWeekData.studyPeriodStartDate || new Date());
            setStudyPeriodEndDate(newWeekData.studyPeriodEndDate || new Date());
        }
    }, [selectedWeek, weekData]);

    const handleHeaderButtonClick = async (index) => {
        setActiveButtonIndex(index);

        if (index === 0) {
            try {
                console.log('저장 중...');

                for (let i = 0; i < weeks.length; i++) {
                    const week = weeks[i];

                    const weekInfo = weekData[i]?.basicInfo || { name: '', description: '' };
                    const periodInfo = {
                        studyPeriodStartDate: weekData[i]?.studyPeriodStartDate?.toISOString(),
                        studyPeriodEndDate: weekData[i]?.studyPeriodEndDate?.toISOString(),
                    };
                    const assignments = weekData[i]?.assignments || [];

                    // 각 주차별로 데이터를 저장
                    await descriptionAPI(roomId, week, weekInfo);
                    await periodAPI(roomId, week, periodInfo);
                    await assignmentsAPI(roomId, week, { assignments });

                    console.log(`주차: ${week + 1}`);
                    console.log(`정보:`, weekInfo);
                    console.log(`기간:`, periodInfo);
                    console.log(`과제:`, assignments);
                }

                alert('저장되었습니다.');
            } catch (error) {
                console.error('저장 중 오류 발생:', error);
                alert('저장 중 오류가 발생했습니다.');
            }
        }
    };

    const handleDelete = () => {
        if (weeks.length > 0) {
            const newWeeks = weeks.slice(0, -1);
            setWeeks(newWeeks);

            // Redux에서 주차 데이터 삭제
            dispatch(deleteWeekData({ weekIndex: selectedWeek }));

            // 선택된 주차가 삭제된 경우, 마지막 주차로 선택 변경
            if (selectedWeek >= newWeeks.length) {
                setSelectedWeek(newWeeks.length - 1);
            }
        }
    };

    const handleAdd = () => {
        const newWeekIndex = weeks.length;
        setWeeks([...weeks, newWeekIndex]);

        // 새로운 주차에 빈 데이터 초기화
        const newWeekData = {
            basicInfo: { name: '', description: '' },
            tasks: [],
            studyPeriodStartDate: null,
            studyPeriodEndDate: null,
            assignments: [],
        };

        dispatch(setWeekData({ weekIndex: newWeekIndex, weekData: newWeekData }));
        setSelectedWeek(newWeekIndex);
    };

    const handleWeekSelect = (index) => {
        setSelectedWeek(index);
    };

    const handleButtonClick = () => {
        navigate('/studymanage');
    };

    return (
        <>
            <PageHeader
                pageTitle="스터디 관리 페이지"
                subTitle="스터디장에게만 보이는 메뉴에요"
                headerTitles={['저장하기']}
                activeButtonIndex={activeButtonIndex}
                onButtonClick={handleHeaderButtonClick}
                changeColorOnClick={true}
                changeColorOnHover={true}
            />

            <RowWrapper>
                <ContentWrapper70>
                    <ManageWeekBasics
                        selectedWeek={selectedWeek}
                        weekData={weekData}
                        onWeekDataChange={handleWeekDataChange}
                        roomId={roomId}
                    />
                    <StudyMangeWeekPeriod
                        selectedWeek={selectedWeek}
                        weekData={weekData}
                        onWeekDataChange={handleWeekDataChange}
                        roomId={roomId}
                    />
                    <ManageWeekeDetailed
                        ref={manageWeekDetailedRef}
                        selectedWeek={selectedWeek}
                        onAssignmentsChange={(assignments) => {
                            handleWeekDataChange({
                                [selectedWeek]: {
                                    ...weekData[selectedWeek],
                                    assignments,
                                },
                            });
                        }}
                    />
                </ContentWrapper70>

                <Sidebar1 ref={sidebarRef}>
                    <BasicInfoButton onClick={handleButtonClick}>기본정보</BasicInfoButton>
                    {weeks.map((week, index) => (
                        <React.Fragment key={week}>
                            <SidebarButton1
                                className={index === weeks.length - 1 ? 'last-week' : ''}
                                bold={index === selectedWeek}
                                onClick={() => handleWeekSelect(index)}
                            >
                                <TextWrapper>{week + 1}주차</TextWrapper>
                                {index === weeks.length - 1 && (
                                    <DelIconWrapper>
                                        <DelIcons src={StudyManageWeekManageDel} alt="삭제" onClick={handleDelete} />
                                    </DelIconWrapper>
                                )}
                            </SidebarButton1>
                        </React.Fragment>
                    ))}
                    <PlusButton onClick={handleAdd}>
                        <PlusIcons src={StudyManageWeekManageManagePlus} alt="추가" />
                    </PlusButton>
                </Sidebar1>
            </RowWrapper>
        </>
    );
};

export default StudyManageWeeKPage;

const RowWrapper = styled.div`
    display: flex;
    @media (max-width: 768px) {
        flex-direction: column-reverse;
    }
`;

const DelIconWrapper = styled.div`
    visibility: hidden;
    margin-left: 0em;
    margin-bottom: -0.3em;
`;

const DelIcons = styled.img`
    width: 3em;
    height: auto;
`;

const Sidebar1 = styled.aside`
    overflow-y: auto;
    background-color: #fbfaff;
    display: flex;
    flex-direction: column;
    border: 1px solid #a2a3b2;
    border-radius: 0.5em;
    max-height: 200px;
    width: 11.25em;
    right: 3%;
    padding: 0.2em;
    padding-bottom: 1em;
    overflow-x: hidden;

    position: -webkit-sticky;
    position: sticky;
    top: 5em;
    margin-top: 4.75em;

    @media (max-width: 768px) {
        position: -webkit-sticky;
        position: sticky;
        top: 60px;
        left: 0;
        width: 100%;
        margin-left: 0;
        box-sizing: border-box;
        border: none;
        flex-direction: row;
        overflow-x: scroll;
        overflow-y: hidden;

        z-index: 10;
        height: 3em;
        max-height: 5em;
    }
`;

const TextWrapper = styled.div`
    flex: 1;
    text-align: center;
`;

const SidebarButton1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    color: #a2a3b2;
    font-weight: ${(props) => (props.bold ? '800' : '400')};
    padding: 0.4em 0em;
    border: 1px solid transparent;
    cursor: pointer;
    width: 100%;
    margin: 0.5em 0em;

    box-sizing: border-box;

    @media (max-width: 768px) {
        flex-direction: row;
        width: auto;
        min-width: 8em;
        padding: 0.5em 0.5em;
        margin-top: 0.5em;
    }

    &:hover {
        border: 1px solid #8e59ff;
        border-radius: 0.4em;
        color: #8e59ff;
        font-weight: 800;
    }

    &.last-week {
        margin-left: 1.5em;
    }

    &.last-week:hover {
        margin-left: 0;
        border: 1px solid #8e59ff;
        border-radius: 0.4em;
        color: #8e59ff;
        font-weight: 800;

        ${DelIconWrapper} {
            margin-right: 1em;
            visibility: visible;

            @media (max-width: 768px) {
                margin-left: 0.1em;
                margin-right: 0em;
            }
        }

        ${TextWrapper} {
            text-align: center;
        }
    }
`;

const BasicInfoButton = styled(SidebarButton1)`
    font-size: 1em;
    font-weight: 1.125em;
    background-color: #8e59ff;
    border: none;
    background-color: transparent;
    color: #a2a3b2;

    @media (max-width: 768px) {
        margin-left: 0.5em;
    }
`;

const PlusButton = styled.button`
    font-size: 1em;
    font-weight: 1.125em;
    background-color: #8e59ff;
    border: none;
    background-color: transparent;
    color: #a2a3b2;
    padding: 0.6em 0.625em;

    @media (max-width: 768px) {
        padding: 0.5em 0.5em;
        margin-top: 0em;
        margin-right: 3em;
    }
`;

const PlusIcons = styled.img`
    width: 1em;
    height: auto;
    transition: filter 0.3s;

    &:hover {
        filter: brightness(0) saturate(100%) invert(0%) sepia(85%) saturate(7497%) hue-rotate(246deg) brightness(105%)
            contrast(103%);
    }
`;
