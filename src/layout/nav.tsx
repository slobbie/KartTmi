import styled from 'styled-components';
import TmiLogo from '../assets/TmiLogo.svg';
import KartLogo from '../assets/logo_kart.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Nav = () => {
  const [selectedTab, setSelectedTab] = useState<number>(1);
  const [nick, setNick] = useState<string>('');
  const TabArr = [
    { id: 1, title: '홈', link: '/' },
    { id: 2, title: '랭킹', link: '/rank' },
    { id: 3, title: '카트', link: '/kart' },
    { id: 4, title: '트랙', link: '/track' },
  ];
  const handleClickTab = (id: number) => {
    setSelectedTab(id);
  };

  return (
    <Header>
      <NavTop>
        <Logo src={KartLogo} />
        <LogoTmi src={TmiLogo} />
        <Span>
          <a href='https://kart.nexon.com/Main/Index.aspx'>
            카트라이더홈페이지바로가기
          </a>
        </Span>
      </NavTop>
      <NavBar>
        <Ul>
          {TabArr.map((li) => {
            return (
              <Link key={li.id} to={li.link}>
                <Li
                  onClick={() => handleClickTab(li.id)}
                  className={selectedTab === li.id ? 'selected' : 'none'}
                >
                  {li.title}
                </Li>
              </Link>
            );
          })}
        </Ul>
      </NavBar>
    </Header>
  );
};

export default Nav;

const Header = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  border: 1px solid black;
`;

const NavTop = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  a {
    color: #6c7a89;
  }
`;

const Logo = styled.img`
  margin-left: 20px;
`;

const LogoTmi = styled.img`
  margin-left: 60px;
`;

const Span = styled.span`
  margin-left: auto;
`;

const NavBar = styled.nav`
  margin: 0 auto;
  width: 100%;
  height: 55px;
  position: relative;
  background-color: ${(props) => props.theme.main};
`;

const Ul = styled.ul`
  max-width: 1000px;
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;
const Li = styled.li`
  font-size: 14px;
  cursor: pointer;
  text-align: center;
  transition: 0.3s ease;
  opacity: 0.5;
  width: 120px;
  height: 18px;
  color: ${(props) => props.theme.white.darker};
  &.selected {
    opacity: 1;
    &:after {
      opacity: 1;
      border-bottom: 5px solid ${(props) => props.theme.white.darker};
      transform: scaleX(1);
      transform-origin: 0% 50%;
      transition: transform 250ms ease-in-out;
      bottom: 0;
    }
  }
  &:hover {
    opacity: 1;
  }
  &:after {
    display: block;
    content: '';
    transform: scaleX(0);
    padding-bottom: 19px;
    margin: 0 auto;
    width: 60px;
  }
  &:hover::after {
    opacity: 1;
    border-bottom: 5px solid ${(props) => props.theme.white.darker};
    transform: scaleX(1);
    transform-origin: 0% 50%;
    transition: transform 250ms ease-in-out;
    bottom: 0;
  }
`;
