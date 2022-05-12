import styled from 'styled-components';
import { keyframes } from 'styled-components';
export const fadeUp = () => keyframes`
  0%{
    opacity: 0;
    transform: translateY(2rem);
  }
  100%{
     opacity:1;
     transform: translateY(0);
  }
`;

const Title = () => {
  return (
    <Wrapper>
      <A href='https://developers.nexon.com/'>넥슨 오픈API 기반</A>
      <TextPone>
        카트라이더<span> 전적 </span>검색
      </TextPone>
      <TextPtwo>사회적거리두기</TextPtwo>
    </Wrapper>
  );
};

export default Title;

const Wrapper = styled.div`
  font-size: 28px;
  line-height: 28px;
  font-weight: 400;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.white.darker};
  animation: ${fadeUp} 1s 0.4s both;
  @media (min-height: 580px) {
    /* margin-bottom: 4.8rem; */
  }
`;

const A = styled.a`
  margin: 2px 0 10px 0;
  font-size: 28px;
  line-height: 28px;
  font-weight: 400;
  span {
    font-weight: 500;
  }
`;

const TextPone = styled.p`
  margin: 2px 0 10px 0;
  font-size: 35px;
  font-weight: 400;
  span {
    font-weight: 500;
  }
`;

const TextPtwo = styled.p`
  letter-spacing: 4px;
  font-size: 1em;
  width: 280px;
  padding: 4px 0;
  text-align: center;
  color: ${(props) => props.theme.white.darker};
  background: rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  margin: 0 auto;
`;
