import React from "react";
import styled from "styled-components";

const Category = () => {
  return (
    <CategoryContainer>
      <Dropdown>
        <option value="정렬">정렬</option>
      </Dropdown>
      <CreatePostButton>+ 트러블 슈팅 등록</CreatePostButton>
    </CategoryContainer>
  );
};

export default Category;

const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
`;

const Dropdown = styled.select`
  padding: 10px;
  border: 1px solid #6c63ff;
  border-radius: 5px;
  background-color: transparent;
  color: #6c63ff;
`;

const CreatePostButton = styled.button`
  background-color: #6c63ff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #5548c8;
  }
`;
