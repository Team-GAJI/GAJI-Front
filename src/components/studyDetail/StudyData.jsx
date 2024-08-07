import React from 'react';
import styled from 'styled-components';


const StudyData = () => {
      
    const data = [
        { id: 1, week: 'Week 1', title: '커리큘럼 제목 1'  },
        { id: 2, week: 'Week 2', title: '커리큘럼 제목 2'  },
        { id: 3, week: 'Week 3', title: '커리큘럼 제목 3'  },
        { id: 4, week: 'Week 4', title: '커리큘럼 제목 4'  },
        // 나중에 추가
  ];

    return (
        <>
        <MainText>스터디 자료</MainText>
        <div style={{ flex: 1 }}>
            <GridContainer>
                {data.map((item) => (
                <Data key={item.id}>
                    <LeftSide />
                    <RightSide>
                    <StudyText>제목</StudyText>
                    <Textarea placeholder={"설명입니다."} />
                    </RightSide>
                </Data>
                ))}
            </GridContainer>
            <DivisionLine/>
        </div>
        </>
    );
};
export default StudyData;

const DivisionLine = styled.div`
    border-top: 1px solid #A2A3B2;
    width: 98%;
    margin-top : 2em;
    margin-left :1em;
`;
const MainText = styled.h1`
 font-size: 1.25em; 
 font-weight: 800;
 color: #8E59FF;
  margin-left : 1em;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);  
  width: 100%;
  margin-left : 1em;
`;

const Data = styled.div`
  width: 16.875em; 
  height: 5em; 
  border: 1px solid #8E59FF;
  border-radius: 0.3125em; 
  overflow: hidden; 
  display: flex;
  position: relative;
`;

const LeftSide = styled.div`
  width: 30%; 
  height: 100%;
  background-color: #8E59FF;
  opacity: 30%;
`;

const RightSide = styled.div`
  width: 50%; 
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  padding: 0.625em 1.25em;
`;

const Textarea = styled.textarea`
  width: 100%; 
  height: auto;
  resize: none;
  border: none;
  outline: none;
  font-size: 0.875em;
  margin-top: 0.625em; 
`;

const StudyText = styled.div`
  font-size: 1em; 
  font-weight: bold;
  margin-bottom: 0.625em; 
`;