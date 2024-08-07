import React, { useState } from 'react';
import styled from 'styled-components';
import PrevMonth from '../../assets/icons/createStudy/CreateStudyprevmonth.svg';
import NextMonth from '../../assets/icons/createStudy/CreateStudynextmonth.svg';

const Calendar = () => {
    const [date, setDate] = useState(new Date());
    const monthName = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    // 달력 날짜 출력
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    const prevMonthLastDate = new Date(currentYear, currentMonth, 0).getDate();
    const nextMonthStartDay = (firstDayOfMonth + daysInMonth) % 7;

    const cells = [];
    const today = new Date();

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
            <Cell key={day} isToday={isToday}>
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
    width : 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2em;
    margin-bottom: 2.5em;
`;

const MonthYear = styled.div`
    font-weight: 800;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(7, 1fr);
    gap: 1em;
`;

const Day = styled.div`
    padding: 10px;

`;

const Cell = styled.div`
    padding: 10px;
    font-weight: ${props => props.isToday ? '600' : '400'};
    color: #979699;
    text-align: center;
    color: ${props => props.isToday ? '#FFFFFF' : '#000000'};
    background-color: ${props => props.isToday ? '#8E59FF' : 'transparent'};
    border-radius: ${props => props.isToday ? '100%' : 'none'};
    box-shadow: ${props => props.isToday ? '0px 4px 10px rgba(129, 76, 161, 0.19);  100%' : 'none'};
    &.empty {
        color: #ccc;
    }
`;

const Icons = styled.img`
    width: 0.61em;
    cursor: pointer;
`;
