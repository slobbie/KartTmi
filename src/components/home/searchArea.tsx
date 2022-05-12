import { css, keyframes } from 'styled-components';
import styled from 'styled-components';
import MainBg from '../../assets/mainbg.png';
import LBg from '../../assets/leftbg.png';
import RBg from '../../assets/rightbg.png';
import CRBg from '../../assets/covidright.png';
import CLBg from '../../assets/covidleft.png';
import Title from './title';

export const Move = (direction: string) => keyframes`
  100%{
    ${direction === 'left' ? 'margin-left' : 'margin-right'}: -180px;
  }
`;
const SearchArea = () => {
  return (
    <Wrapper>
      <Background>
        <ContentWarp>
          <TextBox>
            <Title />
          </TextBox>
          <ImageWrap>
            <Character alt='배찌' direction='left' src={CLBg} />
            <Character alt='다오' direction='right' src={CRBg} />
            <Track alt='트랙' direction='left' src={LBg} />
            <Track alt='트랙' direction='right' src={RBg} />
          </ImageWrap>
        </ContentWarp>
      </Background>
    </Wrapper>
  );
};
export default SearchArea;

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  max-height: 675px;
`;

const ContentWarp = styled.div`
  max-width: 1000px;
  min-width: 680px;
  width: 100%;
  height: 100%;
  border: 1px solid black;
  margin: 0 auto;
  position: relative;
  max-height: 521px;
  margin-top: 114px;
`;

const Background = styled.div`
  height: calc(100% - 20px);
  background: url(${MainBg}) 50% / cover repeat;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  margin-top: -55px;
`;

const TextBox = styled.div`
  width: 100%;
  max-height: 150px;
  height: 100%;
  text-align: center;
  min-width: 680px;
  font-size: 1.6rem;
  position: absolute;
  top: 27%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid black;
`;

const ImageWrap = styled.div`
  position: relative;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  height: 360px;
`;

const Character = styled.img`
  display: block;
  position: absolute;
  width: 380px;
  top: 215px;
  transform: translateY(-50%);
  ${({ direction }: { direction: string }) =>
    css`
      ${direction === 'left' ? 'left' : 'right'} : 0;
      ${direction === 'left' ? 'margin-left' : 'margin-right'}: -800px;
      animation: ${Move(direction)} 0.5s forwards ease-in-out;
    `}
`;

const Track = styled.img`
  position: absolute;
  width: 447px;
  height: 296px;
  top: 215px;
  transform: translateY(-50%);
  margin-left: -800px;
  z-index: 0;
  ${({ direction }: { direction: string }) =>
    css`
      ${direction === 'left' ? 'left' : 'right'} : 0;
      ${direction === 'left' ? 'margin-left' : 'margin-right'}: -800px;
      animation: ${Move(direction)} 0.3s forwards ease-in-out;
    `}
`;
