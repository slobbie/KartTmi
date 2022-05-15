import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

const RankList = () => {
  const navigation = useNavigate();

  const temporarydata = [
    { id: 1, text: '임시데이터' },
    { id: 2, text: '임시데이터' },
    { id: 3, text: '임시데이터' },
    { id: 4, text: '임시데이터' },
    { id: 5, text: '임시데이터' },
    { id: 6, text: '임시데이터' },
    { id: 7, text: '임시데이터' },
    { id: 8, text: '임시데이터' },
    { id: 9, text: '임시데이터' },
    { id: 10, text: '임시데이터' },
  ];

  return (
    <Rank>
      <List>
        <li>
          <Head>
            <RankNum>#</RankNum>
            <Nick>닉네임 (순위변동)</Nick>
            <Pts>승률</Pts>
            <Cnt>리타이어</Cnt>
            <Ave>평균순위</Ave>
          </Head>
        </li>
        {temporarydata.map((item, idx) => (
          <li key={idx} onClick={() => navigation(`/`)}>
            <Info>
              <RankNum>{idx + 4}</RankNum>
              <Nick>{item.text}</Nick>
              <Pts>{item.text}회</Pts>
              <Cnt>{item.text}회</Cnt>
              <Ave>{item.text}위</Ave>
            </Info>
          </li>
        ))}
        {/* <Scroll ref={setRef}>
          {!isLoading && rankConfirm?.length !== 200 && <Loading />}
        </Scroll> */}
      </List>
    </Rank>
  );
};

export default RankList;

const Rank = styled.div`
  /* margin: 50px 0; */
  width: 100%;
  position: relative;
`;

const List = styled.ul`
  list-style: none;
  li {
    position: relative;
    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.main};
      border: 0.3px solid ${({ theme }) => theme.main};
    }
  }
`;

const Head = styled.div`
  padding-left: 60px;
  line-height: 40px;
  height: 40px;
  color: #fff;
  font-weight: 500;
  font-size: 12px;
  background-color: ${({ theme }) => theme.main};
`;

const Info = styled.div`
  padding-left: 60px;
  line-height: 40px;
  height: 40px;
  background-color: #fff;
  border: 1px solid #f2f2f2;
`;

const RankNum = styled.span`
  vertical-align: middle;
  font-weight: 500;
  font-size: 16px;
`;

const Nick = styled.span`
  position: absolute;
  left: 220px;
`;

const Pts = styled.span`
  display: inline-block;
  width: 120px;
  position: absolute;
  right: 260px;
`;

const Cnt = styled.span`
  position: absolute;
  right: 140px;
`;

const Ave = styled.span`
  position: absolute;
  right: 60px;
`;

const Scroll = styled.div`
  margin-top: 20px;
`;
