import React from "react";
import styled from "styled-components";

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
];

const ItemList = () => {
  return (
    <ItemGrid>
      {items.map((item) => (
        <Item key={item.id}>
          <ItemImage src="path_to_image" alt={item.title} />
          <ItemContent>
            <ItemTitle>{item.title}</ItemTitle>
            <ItemDetails>
              <ItemUser>{item.user}</ItemUser>
              <ItemTime>{item.time}</ItemTime>
              <ItemViews>Views: {item.views}</ItemViews>
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
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  padding: 20px;
`;

const Item = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const ItemImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const ItemContent = styled.div`
  padding: 15px;
`;

const ItemTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ItemUser = styled.p`
  font-size: 14px;
  color: #555;
`;

const ItemTime = styled.p`
  font-size: 12px;
  color: #888;
`;

const ItemViews = styled.p`
  font-size: 12px;
  color: #888;
`;
