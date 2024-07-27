import React from 'react'
import styled from 'styled-components'
import HotPostBackground from '../../assets/images/community/hotPostBackground.png';
import { useNavigate } from 'react-router-dom';

const HotPostPreview = () => {
  // useNavigate
  const navigate = useNavigate();

  return (
    <PostWrapper onClick={() => {navigate("/community/post");}}>
        <PostContentContainer>
            <PostTitle>프로젝트 이름</PostTitle>
            <SkillsWrapper>
                <Skill>Spring</Skill>
                <Skill>React</Skill>
                <Skill>AWS</Skill>
            </SkillsWrapper>
        </PostContentContainer>
    </PostWrapper>
  );
};

export default HotPostPreview;

/* CSS */
const PostWrapper = styled.div`
  border: 1px solid #8E59FF;
  border-radius: 8px;
  margin: 0 0.8em;
  width: 14em;
  height: 14em;
  background-image: url(${HotPostBackground});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover{
    transform: translateY(-1.3em);
    box-shadow: 0 0.625em 1.25em #C8C8C8;
  }
`;

const PostContentContainer = styled.div`
  border-top: 1px solid #8E59FF;
  border-radius: 0 0 8px 8px;
  height: 5em;
  background-color: white;
  text-align: start;
`;

const PostTitle = styled.div`
  margin: 1.1em 0.8em;
  font-weight: bold;
  // 말줄임 처리
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;

const SkillsWrapper = styled.div`
  margin: 0.8em;
  width: 12.4em;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
`;

const Skill = styled.div`
  margin-right: 0.4em;
  border-radius: 15px;
  width: 5em;
  height: 1.7em;
  background-color: #8E59FF;
  color: white;
  font-size: 0.7em;
  line-height: 1.7em;
`;