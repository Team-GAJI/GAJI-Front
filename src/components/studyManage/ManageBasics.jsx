import React, { useState } from 'react';
import styled from 'styled-components';
import DeleteIcon from '../../assets/icons/studyManage/StudyManageDelete.png';

const ManageBasics = () => {
    
    const data = [
        { id: 1, week: 'Week 1', title: '커리큘럼 제목 1'  },
        { id: 2, week: 'Week 2', title: '커리큘럼 제목 2'  },
        { id: 3, week: 'Week 3', title: '커리큘럼 제목 3'  },
        // 나중에 추가
    ];
    
    const [studyName, setStudyName] = useState('');
    const [studyDescription, setStudyDescription] = useState('');
  
    const handleStudyNameChange = (event) => {
      setStudyName(event.target.value);
    };
  
    const handleStudyDescriptionChange = (event) => {
      setStudyDescription(event.target.value);
    };
    
    const [count, setCount] = useState(0);

    const handleMinus = () => {
      setCount(prevCount => Math.max(0, prevCount - 1));
    };
  
    const handlePlus = () => {
      setCount(prevCount => prevCount + 1);
    };
    //토글 슈슛
    const [isOn, setisOn] = useState(false);

    const toggleHandler = () => {
      setisOn(!isOn)
    };

    // 이미지 업로드 
    const [files, setFiles] = useState([]);

    const handleFileChange = (e) => {
      const newFiles = Array.from(e.target.files);
      if (newFiles.length + files.length > 5) {
        alert("최대 5개의 파일만 업로드할 수 있습니다.");
        return;
      }
      setFiles([...files, ...newFiles.map((file) => file.name)]);
    };
  
    const handleFileDelete = (fileNameToDelete) => {
      setFiles(files.filter(fileName => fileName !== fileNameToDelete));
    };

    return(
        <Container>
        <Text2>스터디 기본정보</Text2>
        <MainWrapper1>

        <RowWrapper1>
            <LeftWrapper>
                <CategoryButton>카테고리</CategoryButton>
            </LeftWrapper>
            <RightWrapper>
                <MaxCount>최대 인원수 설정</MaxCount>
                <MinusButton onClick={handleMinus}>-</MinusButton>
                <ShowCount>{count}</ShowCount>
                <PlusButton onClick={handlePlus}>+</PlusButton>
            </RightWrapper>
        </RowWrapper1>

        <InputWrapper>
            <InputStudyName
                placeholder="스터디 이름 작성"
                value={studyName}
                onChange={handleStudyNameChange}
            />
            {!studyName && <CharCount>0자/20자</CharCount>}
        </InputWrapper>
        <DivisionLine2/>
            <RowContainer>
            <ImageWrapper>
                <FileInputWrapper>
                    <HiddenFileInput
                    id="file-upload"
                    type="file"
                    accept="image/png"
                    multiple
                    onChange={handleFileChange}
                    />
                    {files.length < 5 && (
                    <FileInputLabel htmlFor="file-upload">이미지 업로드</FileInputLabel>
                    )}
                </FileInputWrapper>

                {files.length === 0 && (
                    <>
                    <ImageText>용량 제한: 400KB</ImageText>
                    <ImageText>파일 형식: PNG만 가능</ImageText>
                    </>
                )}

                <FileList>
                    {files.map((fileName, index) => (
                    <FileNameText key={index}>
                        {fileName}
                        <DeleteIcons src={DeleteIcon} alt="삭제" onClick={() => handleFileDelete(fileName)} />
                    </FileNameText>
                    ))}
                </FileList>
            </ImageWrapper>

                <Container>
                <Text4>스터디 설명</Text4>
                <ExWrapper>
                <InputExStudy
                    placeholder="설명을 입력해주세요"
                    value={studyDescription}
                    onChange={handleStudyDescriptionChange}
                />
                {!studyDescription && <ExStudyCharCount>0자/800자</ExStudyCharCount>}
                </ExWrapper>
                </Container>  
            </RowContainer>
            <Text5>스터디 자료 링크</Text5>
            <InputStudyData placeholder="링크를 입력해주세요" />
            <Container>
                <div style={{ flex: 1 }}>
                <GridContainer>
                    {data.map((item) => (
                    <StudyData key={item.id}>
                        <LeftSide />
                        <RightSide>
                        <Icons src={DeleteIcon} alt="삭제" />
                        <StudyText>제목</StudyText>
                        <Textarea placeholder={"설명입니다."} />
                        </RightSide>
                    </StudyData>
                    ))}
                </GridContainer>
                </div>
            </Container>
            <Container>
                <FlexContainer>
                    <ToggleContainer onClick={toggleHandler}>
                        <div className={`toggle-container ${isOn ? "toggle--checked" : ""}`}/>
                        <div className={`toggle-circle ${isOn ? "toggle--checked" : ""}`}/>
                    </ToggleContainer>
                    <Text7 className={`text ${isOn ? "OFF" : "ON"}`}>공개</Text7>
                    <Text6 className={`text ${isOn ? "ON" : "OFF"}`}>비공개</Text6>
                </FlexContainer>
            </Container>  
        </MainWrapper1>  
        </Container>
    );
};

export default ManageBasics;




const Container = styled.div`
  display: flex;
  flex-direction: column; 
  gap: 0.625em; 
`;

const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between; 
    gap: 0.3125em;
`;

/* 스터디 기본정보 */
const Text2 = styled.p`
    color: #8E59FF;
    font-size: 1.25em; 
    font-weight: 800;
`;

const MainWrapper1 = styled.div`
  background-color: #FBFAFF;
  display: flex;
  flex-direction: column;
  border: 1px solid #8E59FF;
  border-radius: 0.5em; 
  width: 59.375em; 
  height: 50.1875em;
`;

const InputWrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 25em;
    margin: 3.125em 2.5em 0.625em 2.5em; 
`;

const InputStudyName = styled.input`
    background: none;
    border: none;
    outline: none;
    font-size: 1em; 
    &::placeholder {
        color: #A2A3B2;
        font-size: 0.8125em; 
        font-weight: 700;
    }
`;

const CharCount = styled.span`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    color: #A2A3B2;
    font-size: 0.8125em; 
    font-weight: 700;
    text-align: right; 
    right: -35em; 
`;

const DivisionLine2 = styled.div`
    border-top: 1px solid #8E59FF;
    align-items: center;
    margin: 0 2.5em; 
    width: 92%;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #A2A3B2;
  border-radius: 0.5em; 
  width: 25em; 
  height: 16.875em; 
  margin: 1.25em 2.5em; 
  align-items: center;
  gap: 0.3125em; 
`;

const ExWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #A2A3B2;
  border-radius: 0.5em; 
  width: 31.3125em; 
  height: 14.375em; 
  margin-right: 2.5em; 
`;

const Text4 = styled.p`
    color: #8E59FF;
    font-size: 0.9375em;
    font-weight: 700;
    text-align: left;
    width: 100%;
`;

const ImageText = styled.p`
    color: #D0D1D9;
    font-size: 0.9375em; 
    font-weight: 700;
    margin-bottom: -0.625em; 
`;

const FileInputWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const HiddenFileInput = styled.input.attrs({ type: 'file' })`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

const FileInputLabel = styled.label`
  display: inline-block;
  cursor: pointer;
  z-index: 0;
  font-size: 0.8125em; 
  width: 7.5em; 
  border: 1px solid #8E59FF;
  border-radius: 0.625em;
  font-weight: 800;
  padding: 0.7em; 
  text-align: center;
  color: #8E59FF;
  margin-top: 6.25em; 
  background-color: transparent;
`;


/* 스터디 설명 */
const InputExStudy = styled.input`
    background: none;
    border: none;
    outline: none;
    margin: 1.25em 1.25em; 
     font-size: 1em;
    &::placeholder {
        color: #A2A3B2;
        font-size: 0.8125em;
        font-weight: 500;
    }
`;

const ExStudyCharCount = styled.span`
    display: block;
    color: #A2A3B2;
    font-size: 0.8125em; 
    font-weight: 700;
    text-align: right;
    margin-right: 0.625em; 
    margin-top: 10.75em; 
`;

const InputStudyData = styled.input`
    width: 90%;
    height: 1.5625em; 
    border-radius: 0.5em; 
    border: 1px solid #A2A3B2;
    padding: 0.5em; 
    margin-top: 0.5em; 
    margin: 0 2.5em 1.25em 2.5em; 
    outline: none;
    
    &::placeholder {
        color: #C8C8C8;
    }
`;

const Text5 = styled.p`
    color: #8E59FF;
    font-size: 0.9375em; 
    font-weight: 700;
    margin-left: 3em;
    /*margin-right: 50em; */
    top: 3.75em; 
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2.5em; 
    padding: 0 2.5em; 
    width: 100%;
    max-width: 62.5em;
    margin: 1.25em auto 0; 
    box-sizing: border-box;
`;

const StudyData = styled.div`
    width: 16.25em; 
    height: 6.25em; 
    border: 1px solid #8E59FF;
    border-radius: 0.3125em; 
    overflow: hidden;
    display: flex;
    position: relative;
`;

const LeftSide = styled.div`
    width: 9.375em; 
    height: 8.125em; 
    background-color: #8E59FF;
    opacity: 30%;
    background-size: cover;
    background-position: center;
    border-right: 0.0625em solid #000; 
`;

const RightSide = styled.div`
    width: 50%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0.625em 1.5625em; 
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

const Icons = styled.img`
    width: 0.75em; 
    height: auto;
    margin-left: 5.625em; 
    margin-top: 0.3125em; 
`;
const DeleteIcons = styled.img`
  color: #ff4d4d;
  cursor: pointer;
  flex-shrink: 0; 
  width: 0.75em; 
  height: auto;
`;

const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 2.5em; 
`;

const ToggleContainer = styled.div`
    position: relative;
    left: 6.3em; 
    cursor: pointer;

    .toggle-container {
        width: 3.4375em; 
        height: 1.5em; 
        border-radius: 1.875em; 
        border: 1px solid #8E59FF;
    }
    .toggle--checked.toggle-container {
        left: 2em; 
        background-color: #FFFFFF;
    }
    .toggle--checked {
        transition: 0.5s;
    }

    .toggle-circle {
        position: absolute;
        top: 0.1em; 
        left: 0.14375em; 
        width: 1.375em; 
        height: 1.375em; 
        border-radius: 50%;
        background-color: #8E59FF;
        transition: 0.5s;
    }

    .toggle--checked.toggle-circle {
        left: 2em;
        background-color: #8E59FF;
    }
`;

const Text6 = styled.p`
    color: #8E59FF;
    font-size: 0.9375em; 
    font-weight: 700;
    margin-left: 5em;
    
    &.OFF {
        color: #A2A3B2;
    }

    &.ON {
        color: #8E59FF;
    }
`;

const Text7 = styled.p`
    color: #8E59FF;
    font-size: 0.9375em; 
    font-weight: 700;
    margin-left: 0;
    padding: 0.3125em; 
  &.OFF {
    color: #A2A3B2;
  }

  &.ON {
    color: #8E59FF;
  }
`;

const CategoryButton = styled.button`
    border: 0.0625em solid #8E59FF; 
    border-radius: 0.5em;
    font-size: 0.8125em; 
    font-weight: 700;
    color: #8E59FF;
    padding: 0.5em; 
    margin: 0.5em 0.5em 0em  0.5em; 
    width: 30em;
    background-color: transparent; 
    align-self: flex-start;
    text-align: left; 
`;

const MaxCount = styled.p`
    color: #8E59FF;
    font-size: 0.8125em; 
    font-weight: 700;
    margin-top: 2em;
`;

const MinusButton = styled.button`
  border: 0.0625em solid #A2A3B2; 
  border-radius: 100%;
  text-align: center;
  width: 1.5625em;
  height: 1.8625em; 
  background-color: #A2A3B2;
  color: #fff; 
  margin-top: 0.4em;
`;

const PlusButton = styled.button`
  border: 0.0625em solid #A2A3B2; 
  border-radius: 100%;
  text-align: center;
  width: 1.5625em;
  height: 1.8625em; 
  background-color: #A2A3B2; 
  color: #fff; 
  margin-top: 0.4em;
`;

const ShowCount = styled.p`
  border: 0.0625em solid #A2A3B2; 
  border-radius: 0.5em;
  text-align: center;
  width: 5em;
  height: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RowWrapper1 = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between; 
  margin : 2em -2em 0em 2em;
`;

const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const RightWrapper = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;
  margin-right : 4.5em;
  margin-top: -0.9em;
`;

const FileNameText = styled.div`
  color: #333;
  margin: 0.2em 0;
  display: flex;
  margin-left : 2em;
  align-items: center;
  justify-content: space-between;
  word-wrap: break-word;
  white-space: pre-wrap;
  width: 250px;
  padding-right: 20px; 
`;
const FileList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;
