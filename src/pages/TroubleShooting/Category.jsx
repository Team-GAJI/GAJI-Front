import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  border: 1px solid #d0d1d9;
  border-radius: 5px;
  background-color: transparent;
  color: #d0d1d9;
  width: 123px;
  text-align: center;
  text-align-last: center;
`;

const CreatePostButton = styled.button`
  background-color: #8e59ff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  width: 171px;

  &:hover {
    background-color: #5548c8;
  }
`;
