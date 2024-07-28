import React from "react";
import styled from "styled-components";
import UserIcon from "../../icons/usericon.svg"; // UserIcon 경로를 정확히 확인하세요
import ItemImageSrc from "../../images/Rectangle 16.png"; // 올바른 이미지 경로로 수정

const items = [
  {
    id: 1,
    title: "트러블 슈팅 내용",
    user: "user1023",
    time: "1시간 전",
    views: 50,
  },
  {
    id: 2,
    title: "트러블 슈팅 내용",
    user: "user1023",
    time: "1시간 전",
    views: 50,
  },
  {
    id: 3,
    title: "트러블 슈팅 내용",
    user: "user1023",
    time: "1시간 전",
    views: 50,
  },
  {
    id: 4,
    title: "트러블 슈팅 내용",
    user: "user1023",
    time: "1시간 전",
    views: 50,
  },
  {
    id: 5,
    title: "트러블 슈팅 내용",
    user: "user1023",
    time: "1시간 전",
    views: 50,
  },
  {
    id: 6,
    title: "트러블 슈팅 내용",
    user: "user1023",
    time: "1시간 전",
    views: 50,
  },
  {
    id: 7,
    title: "트러블 슈팅 내용",
    user: "user1023",
    time: "1시간 전",
    views: 50,
  },
  {
    id: 8,
    title: "트러블 슈팅 내용",
    user: "user1023",
    time: "1시간 전",
    views: 50,
  },
  {
    id: 9,
    title: "트러블 슈팅 내용",
    user: "user1023",
    time: "1시간 전",
    views: 50,
  },
  {
    id: 10,
    title: "트러블 슈팅 내용",
    user: "user1023",
    time: "1시간 전",
    views: 50,
  },
  {
    id: 11,
    title: "트러블 슈팅 내용",
    user: "user1023",
    time: "1시간 전",
    views: 50,
  },
  {
    id: 12,
    title: "트러블 슈팅 내용",
    user: "user1023",
    time: "1시간 전",
    views: 50,
  },
  {
    id: 13,
    title: "트러블 슈팅 내용",
    user: "user1023",
    time: "1시간 전",
    views: 50,
  },
  {
    id: 14,
    title: "트러블 슈팅 내용",
    user: "user1023",
    time: "1시간 전",
    views: 50,
  },
  {
    id: 15,
    title: "트러블 슈팅 내용",
    user: "user1023",
    time: "1시간 전",
    views: 50,
  },
  {
    id: 16,
    title: "트러블 슈팅 내용",
    user: "user1023",
    time: "1시간 전",
    views: 50,
  },
  {
    id: 17,
    title: "트러블 슈팅 내용",
    user: "user1023",
    time: "1시간 전",
    views: 50,
  },
  {
    id: 18,
    title: "트러블 슈팅 내용",
    user: "user1023",
    time: "1시간 전",
    views: 50,
  },
  {
    id: 19,
    title: "트러블 슈팅 내용",
    user: "user1023",
    time: "1시간 전",
    views: 50,
  },
  {
    id: 20,
    title: "트러블 슈팅 내용",
    user: "user1023",
    time: "1시간 전",
    views: 50,
  },
  {
    id: 21,
    title: "트러블 슈팅 내용",
    user: "user1023",
    time: "1시간 전",
    views: 50,
  },
  {
    id: 22,
    title: "트러블 슈팅 내용",
    user: "user1023",
    time: "1시간 전",
    views: 50,
  },
  {
    id: 23,
    title: "트러블 슈팅 내용",
    user: "user1023",
    time: "1시간 전",
    views: 50,
  },
  {
    id: 24,
    title: "트러블 슈팅 내용",
    user: "user1023",
    time: "1시간 전",
    views: 50,
  },
  {
    id: 25,
    title: "트러블 슈팅 내용",
    user: "user1023",
    time: "1시간 전",
    views: 50,
  },
];

const ItemList = () => {
  return (
    <ItemGrid>
      {items.map((item) => (
        <Item key={item.id}>
          <ItemImage src={ItemImageSrc} alt={item.title} />
          <ItemContent>
            <ItemTitle>{item.title}</ItemTitle>
            <ItemDetails>
              <ItemUser>
                <UserIconImg src={UserIcon} alt="user icon" />
                {item.user}
              </ItemUser>
              <ItemTime>{item.time}</ItemTime>
              <ItemViews>조회 {item.views}</ItemViews>
            </ItemDetails>
          </ItemContent>
        </Item>
      ))}
    </ItemGrid>
  );
};

export default ItemList;

const ItemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  max-width: 1200px;
  width: 100%;
  margin-bottom: 100px;
`;

const Item = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border: 1px solid #8e59ff;
`;

const ItemImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const ItemContent = styled.div`
  padding: 14px;
`;

const ItemTitle = styled.h2`
  font-size: 16px;
  margin-bottom: 30px;
`;

const ItemDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const ItemUser = styled.p`
  font-size: 12px;
  color: #d0d1d9;
  display: flex;
  align-items: center;
`;

const UserIconImg = styled.img`
  width: 14px;
  height: 14px;
  margin-right: 5px;
`;

const ItemTime = styled.p`
  font-size: 12px;
  color: #d0d1d9;
`;

const ItemViews = styled.p`
  font-size: 12px;
  color: #d0d1d9;
`;
