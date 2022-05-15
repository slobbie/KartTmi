import styled, { keyframes } from 'styled-components';

const Wave = () => {
  return (
    <>
      <WaveAnimation></WaveAnimation>
      <SecondWaveAnimate></SecondWaveAnimate>
    </>
  );
};

export default Wave;

const wave = keyframes`
  0% {
    margin-left: 0;
    }
  100% {
    margin-left: -1600px;
    }
`;

const swellup = keyframes`
 0%,
  100% {
    transform: translate3d(0, 15%,0);
  }
  50% {
    transform: translate3d(0, 40%, 0);
  }
`;

const swelldown = keyframes`
 0%,
  100% {
    transform: translate3d(0, 40%,0);
  }
  50% {
    transform: translate3d(0, 15%,0);
  }
`;

const WaveAnimation = styled.div`
  background: url('https://tmi.nexon.com/img/background_wave.svg') repeat-x;
  position: absolute;
  top: 450px;
  width: 6400px;
  height: 198px;
  animation: ${wave} 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite,
    ${swellup} 7s ease -1.25s infinite;
  transform: translateZ(0);
`;

const SecondWaveAnimate = styled.div`
  background: url('https://tmi.nexon.com/img/background_wave.svg') repeat-x;
  position: absolute;
  top: 450px;
  width: 6400px;
  height: 198px;
  left: -150px;
  animation: ${wave} 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite,
    ${swelldown} 7s ease -1.25s infinite;
  opacity: 1;
  transform: translateZ(0);
`;
