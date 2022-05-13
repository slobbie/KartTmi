import styled from 'styled-components';
import FooterImg from '../assets/lablogo.svg';
const Footer = () => {
  return (
    <MainFooter>
      <ContentBox>
        <ImgBox>
          <Img src={FooterImg} />
          <p> | Data based on NEXON DEVELOPERS</p>
        </ImgBox>
        <TextBox>
          <p>Abuot TMI</p>
        </TextBox>
      </ContentBox>
    </MainFooter>
  );
};

export default Footer;

const MainFooter = styled.footer`
  width: 100%;
  height: 100px;
  background-color: #fafafa;
`;

const ContentBox = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  height: 50px;
  padding-bottom: 20px;
  opacity: 0.3;
`;
const ImgBox = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  width: 145px;
  height: 45px;
`;

const TextBox = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
`;
