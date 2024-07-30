import React, { useState } from "react";
import styled from "styled-components";
import { FaChevronDown } from "react-icons/fa";

const Category = ({ onSelect }) => {
  const [selectedOption, setSelectedOption] = useState("정렬");
  const [isOpen, setIsOpen] = useState(false);
  const sortingOptions = ["인기순", "최신순"];

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <CategoryWrapper>
      <CategoryContainer>
        <DropdownContainer>
          <SelectedOption onClick={() => setIsOpen(!isOpen)}>
            {selectedOption} <FaChevronDown />
          </SelectedOption>
          {isOpen && (
            <OptionsContainer>
              {sortingOptions.map((option) => (
                <Option key={option} onClick={() => handleSelect(option)}>
                  {option}
                </Option>
              ))}
            </OptionsContainer>
          )}
        </DropdownContainer>
        <CreatePostButton>+ 트러블 슈팅 등록</CreatePostButton>
      </CategoryContainer>
    </CategoryWrapper>
  );
};

export default Category;

const CategoryWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #d0d1d9;
  margin-bottom: 20px;
  background-color: #fff;
`;

const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const DropdownContainer = styled.div`
  position: relative;
  width: 150px;
`;

const SelectedOption = styled.div`
  background-color: #fff;
  border: 1.5px solid #d0d1d9;
  border-radius: 10px;
  padding: 10px 15px;
  color: #d0d1d9;
  text-align: center;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8em;
`;

const OptionsContainer = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  background-color: #fff;
  border: 1px solid #d0d1d9;
  border-radius: 10px;
  overflow: hidden;
  z-index: 10;
`;

const Option = styled.div`
  padding: 10px;
  color: #333;
  text-align: center;
  cursor: pointer;
  font-size: 0.8em;

  &:hover {
    background-color: #f1f1f1;
  }
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
