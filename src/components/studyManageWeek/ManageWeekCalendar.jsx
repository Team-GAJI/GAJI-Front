import React, { useState } from 'react';
import styled from 'styled-components';
import PrevMonth from '../../assets/icons/studyManageWeek/StudyManageWeekprevmonth.svg';
import NextMonth from '../../assets/icons/studyManageWeek/StudyManageWeeknextmonth.svg';
const Calendar = () => {
    const [date, setDate] = useState(new Date());
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const monthName = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    const prevMonthLastDate = new Date(currentYear, currentMonth, 0).getDate();
    const nextMonthStartDay = (firstDayOfMonth + daysInMonth) % 7;

    const cells = [];
    const today = new Date();

    const isDateInRange = (day) => {
        const currentDate = new Date(date.getFullYear(), date.getMonth(), day);
        if (startDate && endDate) {
            return currentDate > startDate && currentDate < endDate;
        }
        return false;
    };

    const isDateSelected = (day) => {
        const currentDate = new Date(date.getFullYear(), date.getMonth(), day);
        return (startDate && endDate && 
                (currentDate.toDateString() === startDate.toDateString() || 
                 currentDate.toDateString() === endDate.toDateString()));
    };

    const isInSelectionRange = (day) => {
        if (!startDate || !endDate) return false;
        const currentDate = new Date(date.getFullYear(), date.getMonth(), day);
        return currentDate >= startDate && currentDate <= endDate;
    };

    const handleDateClick = (day) => {
        const selectedDate = new Date(date.getFullYear(), date.getMonth(), day);
        
        if (!startDate) {
            setStartDate(selectedDate);
            setEndDate(null);
        } else if (!endDate) {
            if (selectedDate < startDate) {
                setStartDate(selectedDate);
                setEndDate(null);
            } else {
                setEndDate(selectedDate);
            }
        } else {
            setStartDate(selectedDate);
            setEndDate(null);
        }
    };

    // 이전 달의 날짜 추가
    for (let i = firstDayOfMonth; i > 0; i--) {
        cells.push(
            <Cell key={`prev-${i}`} className="empty">
                {prevMonthLastDate - i + 1}
            </Cell>
        );
    }

    // 현재 달의 날짜 추가
    for (let day = 1; day <= daysInMonth; day++) {
        const isToday = 
            today.getDate() === day && 
            today.getMonth() === currentMonth && 
            today.getFullYear() === currentYear;
        
        cells.push(
            <Cell
                key={day}
                isToday={isToday}
                isInRange={isInSelectionRange(day)}
                isSelected={isDateSelected(day)}
                onClick={() => handleDateClick(day)}
            >
                {day}
            </Cell>
        );
    }

    // 다음 달의 날짜 추가
    for (let i = 1; i <= (7 - nextMonthStartDay) % 7; i++) {
        cells.push(
            <Cell key={`next-${i}`} className="empty">
                {i}
            </Cell>
        );
    }

    const prevMonth = () => {
        setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
    };

    const nextMonth = () => {
        setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
    };

    return (
        <CalendarContainer>
            <Header>
                <Icons src={PrevMonth} alt="전으로 넘어가기" onClick={prevMonth} />
                <MonthYear>
                    {`${year}년`} {`${monthName}`}
                </MonthYear>
                <Icons src={NextMonth} alt="다음으로 넘어가기" onClick={nextMonth} />
            </Header>
            <Grid>
                {days.map((day, index) => (
                    <Day key={index}>{day}</Day>
                ))}
                {cells}
            </Grid>
        </CalendarContainer>
    );
};


export default Calendar;

const CalendarContainer = styled.div`
    margin: 0 auto;
    text-align: center;
`;

const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2em;
    margin-bottom: 2.5em;
`;

const MonthYear = styled.div`
    font-weight: 800;
    font-size: 1.2em;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(7, 1fr);

`;

const Day = styled.div`
    padding: 10px;
    font-weight: bold;
`;

const Icons = styled.img`
    width: 1.5em;
    cursor: pointer;
`;

const Cell = styled.div`
    padding: 15px;
    font-weight: ${props => props.isToday ? '600' : '400'};
    color: ${props => (props.isToday || props.isSelected) ? '#FFFFFF' : '#000000'};
    background-color: ${props => 
        props.isToday ? '#8E59FF' : 
        props.isSelected ? '#8E59FF'  :
        'transparent'
    };
    border-radius: ${props => props.isToday || props.isSelected ? '50%' : 'none'};
    box-shadow: ${props => props.isToday ? '0px 4px 10px rgba(129, 76, 161, 0.19)' : 'none'};
    cursor: pointer;
    position: relative;
    z-index: ${props => props.isInRange ? '1' : 'auto'};


    &:before {
        overflow: hidden;
        content: '';
        position: absolute;
        top: 50%;
        left: ${props => props.isInRange && !props.isSelected ? '0%' : 'auto'};
        right: ${props => props.isInRange && !props.isSelected ? '0%' : 'auto'};
        width: ${props => props.isInRange && !props.isSelected ? 'calc(100% + 0em)' : '0%'};
        height: 40px; 
        background-color: ${props => props.isInRange && !props.isSelected ? '#CBB8EE' : 'transparent'};
        transform: translateY(-50%);
        z-index: -1;
        
        display: ${props => (props.isInRange && !props.isSelected) ? 'block' : 'none'};

        border-top-left-radius: ${props => (props.isInRange && !props.isSelected) ? '20px' : 'none'};
        border-bottom-left-radius: ${props => (props.isInRange && !props.isSelected) ? '20px' : 'none'};
        border-top-right-radius: ${props => (props.isInRange && !props.isSelected) ? '20px' : 'none'};
        border-bottom-right-radius: ${props => (props.isInRange && !props.isSelected) ? '20px' : 'none'};
    }

    /* 선택된 날짜의 왼쪽과 오른쪽 모서리 둥글게 처리 */
    &:first-child {
        border-top-left-radius: ${props => props.isStart ? '10px' : 'none'};
        border-bottom-left-radius: ${props => props.isStart ? '10px' : 'none'};
    }

    &:last-child {
        border-top-right-radius: ${props => props.isEnd ? '10px' : 'none'};
        border-bottom-right-radius: ${props => props.isEnd ? '10px' : 'none'};
    }

    &.empty {
        color: #ccc;
    }
`;
