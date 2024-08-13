import React from "react";
import styled from "styled-components";
import UserIcon from "../../assets/icons/common/usericon.svg";
import ItemImageSrc from "../../assets/images/common/Rectangle16.png";
import CommentIconSrc from "../../assets/images/troubleshooting/comment.png";

const items = [
  {
    id: 1,
    title: "트러블 슈팅 내용",
    user: "user1023",
    time: "1시간 전",
    views: 50,
    comments: 10,
  },
  {
    id: 2,
    title: "트러블 슈팅 내용",
    user: "user1023",
    time: "1시간 전",
    views: 50,
    comments: 10,
  },
  {
    id: 3,
    title: "트러블 슈팅 내용",
    user: "user1023",
    time: "1시간 전",
    views: 50,
    comments: 10,
  },
  {
    id: 4,
    title: "트러블 슈팅 내용",
    user: "user1023",
    time: "1시간 전",
    views: 50,
    comments: 10,
  },
  {
    id: 5,
    title: "트러블 슈팅 내용",
    user: "user1023",
    time: "1시간 전",
    views: 50,
    comments: 10,
  },
  {
    id: 6,
    title: "트러블 슈팅 내용",
    user: "user1023",
    time: "1시간 전",
    views: 50,
    comments: 10,
  },
  {
    id: 7,
    title: "트러블 슈팅 내용",
    user: "user1023",
    time: "1시간 전",
    views: 50,
    comments: 10,
  },
  {
    id: 8,
    title: "트러블 슈팅 내용",
    user: "user1023",
    time: "1시간 전",
    views: 50,
    comments: 10,
  },
  {
    id: 9,
    title: "트러블 슈팅 내용",
    user: "user1023",
    time: "1시간 전",
    views: 50,
    comments: 10,
  },
  {
    id: 10,
    title: "트러블 슈팅 내용",
    user: "user1023",
    time: "1시간 전",
    views: 50,
    comments: 10,
  },
  {
    id: 11,
    title: "트러블 슈팅 내용",
    user: "user1023",
    time: "1시간 전",
    views: 50,
    comments: 10,
  },
  {
    id: 12,
    title: "트러블 슈팅 내용",
    user: "user1023",
    time: "1시간 전",
    views: 50,
    comments: 10,
  },
  {
    id: 13,
    title: "트러블 슈팅 내용",
    user: "user1023",
    time: "1시간 전",
    views: 50,
    comments: 10,
  },
  {
    id: 14,
    title: "트러블 슈팅 내용",
    user: "user1023",
    time: "1시간 전",
    views: 50,
    comments: 10,
  },
  {
    id: 15,
    title: "트러블 슈팅 내용",
    user: "user1023",
    time: "1시간 전",
    views: 50,
    comments: 10,
  },
  {
    id: 16,
    title: "트러블 슈팅 내용",
    user: "user1023",
    time: "1시간 전",
    views: 50,
    comments: 10,
  },
  {
    id: 17,
    title: "트러블 슈팅 내용",
    user: "user1023",
    time: "1시간 전",
    views: 50,
    comments: 10,
  },
  {
    id: 18,
    title: "트러블 슈팅 내용",
    user: "user1023",
    time: "1시간 전",
    views: 50,
    comments: 10,
  },
  {
    id: 19,
    title: "트러블 슈팅 내용",
    user: "user1023",
    time: "1시간 전",
    views: 50,
    comments: 10,
  },
  {
    id: 20,
    title: "트러블 슈팅 내용",
    user: "user1023",
    time: "1시간 전",
    views: 50,
    comments: 10,
  },
  {
    id: 21,
    title: "트러블 슈팅 내용",
    user: "user1023",
    time: "1시간 전",
    views: 50,
    comments: 10,
  },
  {
    id: 22,
    title: "트러블 슈팅 내용",
    user: "user1023",
    time: "1시간 전",
    views: 50,
    comments: 10,
  },
  {
    id: 23,
    title: "트러블 슈팅 내용",
    user: "user1023",
    time: "1시간 전",
    views: 50,
    comments: 10,
  },
  {
    id: 24,
    title: "트러블 슈팅 내용",
    user: "user1023",
    time: "1시간 전",
    views: 50,
    comments: 10,
  },
  {
    id: 25,
    title: "트러블 슈팅 내용",
    user: "user1023",
    time: "1시간 전",
    views: 50,
    comments: 10,
  },
];

const ItemList = () => {
  return (
    <ItemGrid>
      {items.map((item) => (
        <Item key={item.id}>
          <ItemImageWrapper>
            <ItemImage src={ItemImageSrc} alt={item.title} />
            <CommentInfo>
              <CommentIcon src={CommentIconSrc} alt="comment icon" />
              <CommentCount>{item.comments}</CommentCount>
            </CommentInfo>
          </ItemImageWrapper>

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
  grid-template-columns: repeat(5, 1fr); /* Default for larger screens */
  gap: 1.25em;
  max-width: 75em;
  width: 100%;
  margin-top: 2.5em;
  margin-bottom: 3.125em;

  @media (max-width: 768px) {
    /* For screens 768px wide or less */
    grid-template-columns: repeat(2, 1fr); /* 2 columns on mobile */
    gap: 1em;
  }

  @media (max-width: 480px) {
    /* For smaller mobile screens */
    grid-template-columns: repeat(2, 1fr); /* Keep 2 columns */
    gap: 0.75em;
  }
`;

const Item = styled.div`
  background-color: #fff;
  border-radius: 0.625em;
  box-shadow: 0 0.25em 0.375em rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border: 0.0625em solid #8e59ff;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-0.5em);
    box-shadow: 0 0.5em 0.75em rgba(0, 0, 0, 0.2);
  }
`;

const ItemImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 9.375em;
`;

const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CommentInfo = styled.div`
  position: absolute;
  top: 0.65em;
  left: 0.65em;
  display: flex;
  align-items: center;
`;

const CommentIcon = styled.img`
  width: 0.65em;
  height: 0.65em;
  margin-right: 0.45em;
`;

const CommentCount = styled.span`
  margin-left: 0.3em;
  font-size: 0.75em;
  color: white;
`;

const ItemContent = styled.div`
  padding: 0.875em;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #f0f0f0;
    transform: scale(1.02);
  }
`;

const ItemTitle = styled.h2`
  font-size: 1em;
  margin-bottom: 1em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ItemDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.625em;
  margin-bottom: 0.1em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ItemUser = styled.p`
  font-size: 0.55em;
  color: #d0d1d9;
  display: flex;
  align-items: center;
`;

const UserIconImg = styled.img`
  width: 1.4em;
  height: 1.4em;
  margin-right: 0.5em;
`;

const ItemTime = styled.p`
  font-size: 0.65em;
  color: #d0d1d9;
`;

const ItemViews = styled.p`
  font-size: 0.5em;
  color: #d0d1d9;
`;
