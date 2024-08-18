// import React from 'react';
// import styled from 'styled-components';
// import ManageWeekCalendar from '../studyManageWeek/ManageWeekCalendar';

// const ManageWeekDate = ({ selectedWeek }) => {
//     return(

//         //불필요시 삭제 요망
//         <Container>
//             <Text2>스터디 기한</Text2>
//             <MainWrapper2>
//                 <RowWrapper>
//                     <CalendarWrapper>
//                         <ManageWeekCalendar/>
//                     </CalendarWrapper>
//                     <DivisionLine3/>
//                     <Container>
//                         <DeadlineWrapper>
//                             <Text8>{selectedWeek + 1}주차 스터디 진행 기한</Text8>
//                             <RowWrapper2>
//                                 <StartButton>시작</StartButton>
//                                 <DateText>3월 1일</DateText>
//                                 <EndButton>끝</EndButton>
//                                 <DateText>3월 1일</DateText>
//                             </RowWrapper2>
//                             <SidebarButton>일정등록하기</SidebarButton>
//                         </DeadlineWrapper>
//                     </Container>
//                 </RowWrapper>
//             </MainWrapper2>  
//         </Container>
//     );
// };

// export default ManageWeekDate;


// const Container = styled.div`
//   display: flex;
//   flex-direction: column; 
//   gap: 0.625em; 
// `;


// const RowWrapper = styled.div`
//     width: 100%;
//     display: flex;
//     gap: 4.25em;
// `;


// const SidebarButton = styled.div`
//     font-size: 0.8125em;
//     width: 120px;
//     border: 1px solid #8E59FF;
//     background-color: #8E59FF;
//     border-radius: 10px;
//     font-weight: 800;
//     padding: 0.7em;
//     text-align: center;
//     color: #fff;
//     margin: 10px 0;
// `;

// /* 스터디 기본정보 */
// const Text2 = styled.p`
//     color: #8E59FF;
//     font-size: 1.25em; 
//     font-weight: 800;
// `;

// const MainWrapper2 = styled.div`
//   background-color: #fff;
//   display: flex;
//   flex-direction: column;
//   border: 1px solid #8E59FF;
//   border-radius: 0.5em; 
//   width: 59.375em;
//   height: 28.125em; 
//   margin-bottom : 0em;
// `;

// const DivisionLine3 = styled.div`
//   border-left: 0.0625em solid #A2A3B2;
//   height: 26.25em; 
//   margin: 0.625em;
// `;

// const StartButton = styled.button`
//     background-color: #fff;
//     border: 0.0625em solid #8E59FF; 
//     border-radius: 0.5em; 
//     font-size: 0.8125em; 
//     font-weight: 700;
//     text-align: center;
//     padding: 0.5em; 
//     color: #8E59FF;
//     cursor: pointer;
//     width: 3.75em; 
// `;

// const EndButton = styled.button`
//     background-color: #fff;
//     border: 0.0625em solid #8E59FF; 
//     border-radius: 0.5em;
//     font-size: 0.8125em; 
//     font-weight: 700;
//     text-align: center;
//     padding: 0.5em; 
//     color: #8E59FF;
//     cursor: pointer;
//     width: 3.75em;
// `;

// const Text8 = styled.p`
//     color: #8E59FF;
//     font-size: 1.125em;
//     font-weight: 800;
// `;

// const DateText = styled.p`
//     color: #000;
//     font-size: 0.75em; 
//     font-weight: 800;
// `;

// const RowWrapper2 = styled.div`
//     width: 100%;
//     display: flex;
//     gap: 1em; 
// `;

// const DeadlineWrapper = styled.div`
//     margin: 8.5em 0 1.25em 0; 
// `;

// const CalendarWrapper = styled.div`
//     margin: 2.5em 0 1.25em 2.5em; 
// `;