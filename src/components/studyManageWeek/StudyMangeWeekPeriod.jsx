// import React, {useState} from 'react';
// import styled from 'styled-components';
// import StudyCreateRecruitCalendar from './StudyCreateRecruitCalendar';
// import StudyCreateCalendar from './StudyCreateCalendar';

// const StudyPeriod = () => {
//     // state 관리
//     const [startDate, setStartDate] = useState(null);
//     const [endDate, setEndDate] = useState(null);
//     // Button 활성화 상태 관리
//     const [isRecruitmentActive, setIsRecruitmentActive] = useState(true);
//     const [isStudyPeriodActive, setIsStudyPeriodActive] = useState(false);

//     // 오늘 날짜 불러오기
//     const today = new Date();

//     // 날짜 불러오기
//     const handleStartDateChange = (date) => {
//         setStartDate(date);
//         console.log("Start Date:", date.toDateString());
//     };
//     const handleEndDateChange = (date) => {
//         setEndDate(date);
//         console.log("End Date:", date.toDateString());
//     };

//     const formatDate = (date) => {
//         const month = date.getMonth() + 1;
//         const day = date.getDate();
//         return `${month}월 ${day}일`;
//     };

//     const handleCalendarSwitch = () => {
//         !setIsRecruitmentActive;
//         !setIsStudyPeriodActive;
//     };

//     return (
//         <ComponentWrapper>
//             {/* 캘린더 영역 */}
//             {(isRecruitmentActive) && (
//                 <StudyCreateRecruitCalendar
//                     onStartDateChange={handleStartDateChange} 
//                     onEndDateChange={handleEndDateChange}/>
//             )}

//             {(isStudyPeriodActive) && (
//                 <StudyCreateCalendar
//                     onStartDateChange={handleStartDateChange} 
//                     onEndDateChange={handleEndDateChange}/>
//             )}

//             {/* <StudyCreateCalendar
//                 onStartDateChange={handleStartDateChange} 
//                 onEndDateChange={handleEndDateChange}/> */}
            
//             {/* 기한 영역 */}
//             <RightWrapper>
                
//                 {/* 스터디 모집기한 */}
//                 <ContentWrapper>
//                     <Title>스터디 모집 기한</Title>
//                     <Button onClick={() => handleCalendarSwitch()}>입력하기</Button>
//                     <PeriodWrapper>
//                         <Text>시작</Text>
//                         <Period>{startDate ? formatDate(startDate) : formatDate(today)}</Period>
//                         <Text>끝</Text>
//                         <Period>{endDate ? formatDate(endDate) : formatDate(today)}</Period>
//                     </PeriodWrapper>
//                 </ContentWrapper>

//                 {/* 스터디 진행기한 */}
//                 <ContentWrapper>
//                     <Title>스터디 진행 기한</Title>
//                     <Button onClick={() => handleCalendarSwitch()}>입력하기</Button>
//                     <PeriodWrapper>
//                         <Text>시작</Text>
//                         <Period>{startDate ? formatDate(startDate) : formatDate(today)}</Period>
//                         <Text>끝</Text>
//                         <Period>{endDate ? formatDate(endDate) : formatDate(today)}</Period>
//                     </PeriodWrapper>
//                 </ContentWrapper>
//             </RightWrapper>
//         </ComponentWrapper>
//     );
// };

// export default StudyPeriod;

// /* CSS */
// const ComponentWrapper = styled.div`
//     border: 1px solid #8E59FF;
//     border-radius: 10px;
//     width: 100%;
//     display: flex;
//     align-items: center;
// `;

// const RightWrapper = styled.div`
//     border-left: 1.2px solid #A2A3B2;
//     height: 17em;
//     display: flex;
//     flex-direction: column;
// `;

// const ContentWrapper = styled.div`
//     margin: 0 0 3.5em 4em;
//     display: flex;
//     flex-direction: column;
// `;

// const Title = styled.div`
//     color: #8E59FF;
//     font-weight: 800;
// `;

// const Button = styled.div`
//     margin: 1.2em 0;
//     border-radius: 10px;
//     width: 11em;
//     height: 2.2308em;
//     line-height: 2.2308em;
//     text-align: center;
//     background-color: #8E59FF;
//     color: white;
//     font-size: 0.8125em;
//     font-weight: bold;
//     cursor: pointer;
// `;

// const PeriodWrapper = styled.div`
//     display: flex;
//     align-items: center;
// `;

// const Text = styled.div`
//     border: 1px solid #8E59FF;
//     border-radius: 10px;
//     width: 5.0545em;
//     height: 2.2054em;
//     line-height: 2.2054em;
//     text-align: center;
//     color: #8E59FF;
//     font-size: 0.8125em;
//     font-weight: bold;
// `;

// const Period = styled.div`
//     margin: 0 4em 0 1em;
//     color: #161A3F;
//     font-size: 0.8125em;
//     font-weight: bold;
// `;

import React, {useState} from 'react';
import styled from 'styled-components';
import StudyCreateCalendar from './StudyManageWeekCalendar';

const StudyMangeWeekPeriod = ({selectedWeek}) => {
    // state 관리
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    // 오늘 날짜 불러오기
    const today = new Date();

    // 날짜 불러오기
    const handleStartDateChange = (date) => {
        setStartDate(date);
        console.log("Start Date:", date.toDateString());
    };
    const handleEndDateChange = (date) => {
        setEndDate(date);
        console.log("End Date:", date.toDateString());
    };

    const formatDate = (date) => {
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${month}월 ${day}일`;
    };

    return (
        <ComponentWrapper>
            {/* 캘린더 영역 */}
            <StudyCreateCalendar
                onStartDateChange={handleStartDateChange} 
                onEndDateChange={handleEndDateChange}/>
            
            {/* 기한 영역 */}
            <RightWrapper>

                {/* 스터디 진행기한 */}
                <ContentWrapper>
                    <Title>{selectedWeek + 1}주차 스터디 진행 기한</Title>
                    <Button>입력하기</Button>
                    <PeriodWrapper>
                        <Text>시작</Text>
                        <Period>{startDate ? formatDate(startDate) : formatDate(today)}</Period>
                        <Text>끝</Text>
                        <Period>{endDate ? formatDate(endDate) : formatDate(today)}</Period>
                    </PeriodWrapper>
                </ContentWrapper>
            </RightWrapper>
        </ComponentWrapper>
    );
};

export default StudyMangeWeekPeriod;

/* CSS */
const ComponentWrapper = styled.div`
    border: 1px solid #8E59FF;
    border-radius: 10px;
    width: 100%;
    display: flex;
    align-items: center;
`;

const RightWrapper = styled.div`
    border-left: 1.2px solid #A2A3B2;
    height: 17em;
    display: flex;
    flex-direction: column;
`;

const ContentWrapper = styled.div`
    margin: 0 0 3.5em 4em;
    display: flex;
    flex-direction: column;
`;

const Title = styled.div`
    color: #8E59FF;
    font-weight: 800;
`;

const Button = styled.div`
    margin: 1.2em 0;
    border-radius: 10px;
    width: 11em;
    height: 2.2308em;
    line-height: 2.2308em;
    text-align: center;
    background-color: #8E59FF;
    color: white;
    font-size: 0.8125em;
    font-weight: bold;
    cursor: pointer;
`;

const PeriodWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const Text = styled.div`
    border: 1px solid #8E59FF;
    border-radius: 10px;
    width: 5.0545em;
    height: 2.2054em;
    line-height: 2.2054em;
    text-align: center;
    color: #8E59FF;
    font-size: 0.8125em;
    font-weight: bold;
`;

const Period = styled.div`
    margin: 0 4em 0 1em;
    color: #161A3F;
    font-size: 0.8125em;
    font-weight: bold;
`;