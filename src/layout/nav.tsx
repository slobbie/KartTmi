import styled from 'styled-components';
import TmiLogo from '../assets/TmiLogo.svg';
import KartLogo from '../assets/logo_kart.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Nav = () => {
  const [selectedTab, setSelectedTab] = useState<number>(1);
  const [nick, setNick] = useState<string>('');
  const [searchOpen, setSearchOpen] = useState(false);

  const inputAnimation = useAnimation();
  const TabArr = [
    { id: 1, title: '홈', link: '/' },
    { id: 2, title: '랭킹', link: '/rank' },
    { id: 3, title: '카트', link: '/kart' },
    { id: 4, title: '트랙', link: '/track' },
  ];
  const handleClickTab = (id: number) => {
    setSelectedTab(id);
  };

  const onSearchToggle = () => {
    if (searchOpen) {
      // close animation
      inputAnimation.start({
        scaleX: 0,
      });
    } else {
      // open animation
      inputAnimation.start({
        scaleX: 1,
      });
    }
    setSearchOpen((prev) => !prev);
  };

  return (
    <Header>
      <NavTop>
        <Logo src={KartLogo} />
        <Link to='/'>
          <LogoTmi src={TmiLogo} />
        </Link>
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
          <SearchBar>
            <Search>
              <motion.svg
                onClick={() => onSearchToggle()}
                animate={{ x: searchOpen ? -185 : 0 }}
                transition={{ type: 'linear' }}
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                  clipRule='evenodd'
                ></path>
              </motion.svg>
              <Input
                animate={inputAnimation}
                initial={{ scaleX: 0 }}
                transition={{ type: 'linear' }}
                placeholder='Search for id'
              />
            </Search>
          </SearchBar>
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
  display: flex;
  background-color: ${(props) => props.theme.main};
  z-index: 30;
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

const SearchBar = styled.div`
  margin-left: auto;
  border-radius: 10px;
`;

const Search = styled.div`
  color: ${(props) => props.theme.white.darker};
  display: flex;
  align-items: center;
  position: relative;
  border: none;
  svg {
    height: 25px;
    z-index: 21;
  }
`;

const Input = styled(motion.input)`
  // transform-origin 은 변화가 시작하는 위치를 의미
  border-radius: 10px;
  transform-origin: right center;
  position: absolute;
  right: 0px;
  padding: 5px 10px;
  padding-left: 40px;
  z-index: -1;
  color: ${(props) => props.theme.white.darker};
  font-size: 16px;
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.white.darker};
  z-index: 20;
`;
