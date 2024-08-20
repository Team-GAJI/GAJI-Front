import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();

  const handleCreatePost = () => {
    navigate("/troubleshooting-register");
  };

  return (
    <CategoryWrapper>
      <CategoryContainer>
        <CreatePostButton onClick={handleCreatePost}>
          + 트러블 슈팅 등록
        </CreatePostButton>
      </CategoryContainer>
    </CategoryWrapper>
  );
};

export default Category;

const CategoryWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #d0d1d9;
  margin-bottom: 20px;
`;

const CategoryContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px 0px;
`;

const CreatePostButton = styled.button`
  background-color: #8e59ff;
  border: 0.0625em solid #8e59ff;
  color: #fff;
  border-radius: 0.7em;
  font-weight: 700;
  width: 11.75em;
  height: 2.5em;
  margin-right: 0;
  font-family: "NanumSquareNeo", sans-serif;

  &:hover {
    background-color: #5548c8;
  }
`;
