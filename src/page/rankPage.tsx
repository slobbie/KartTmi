import styled from 'styled-components';
import Wave from '../components/rank/Wave';
const RankPage = () => {
  return (
    <Wrapper>
      <Background>
        <ContentWarp></ContentWarp>
        <Wave />
      </Background>
    </Wrapper>
  );
};

export default RankPage;

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  max-height: 675px;
`;

const ContentWarp = styled.div`
  max-width: 1000px;
  min-width: 680px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  max-height: 521px;
  margin-top: 110px;
`;

const Background = styled.div`
  height: 100%;
  background-color: ${(props) => props.theme.main};
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  margin-top: -55px;
  overflow: hidden;
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
  justify-content: flex-start;
  z-index: 40;
`;

const ImageWrap = styled.div`
  position: relative;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  height: 360px;
`;
