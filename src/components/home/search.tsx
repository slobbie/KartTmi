import React, { useEffect, useState } from 'react';
import { keyframes } from 'styled-components';
import MarginTop from '../marginTop';
import Tmibtn from '../../assets/tmibtn.svg';
import { getUserNicknameData } from '../../service/API/api';
import styled from 'styled-components';
import { IoPerson, IoClose } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

export const expand = (width: string, minWidth: string) => keyframes`
  100%{
    width: ${width};
    min-width: ${minWidth}
  }
`;

const Search = () => {
  const [nickname, setNickName] = useState('');
  const [keywords, setKeywords] = useState(
    JSON.parse(localStorage.getItem('keywords') || '[]')
  );
  const [userName, setUserName] = useState(
    JSON.parse(localStorage.getItem('Nickname') || '')
  );

  const navigtor = useNavigate();

  // 일치 데이터 없을시 메세지

  //keyword에 변화가 일어날때만 랜더링
  useEffect(() => {
    localStorage.setItem('keywords', JSON.stringify(keywords));
    localStorage.setItem('Nickname', JSON.stringify(userName));
  }, [keywords, userName]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickName(e.target.value);
  };

  const onForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getUserNicknameData(nickname);
    setNickName('');
    navigtor(`/user/${userName}`);
  };

  const handleAddKeyword = (nickname: string) => {
    const newKeyword = {
      id: Date.now(),
      text: nickname,
    };
    setKeywords([newKeyword, ...keywords]);
  };

  //검색어 삭제
  const handleRemoveKeyword = (id: number) => {
    const nextKeyword = keywords.filter((Keyword: any) => {
      return Keyword.id !== id;
    });
    setKeywords(nextKeyword);
  };

  return (
    <>
      <MarginTop margin={90} />
      <SearchWrap>
        <Form onSubmit={onForm}>
          <FormItem>
            <InputSearch value={nickname} onChange={onChange} />
          </FormItem>
          <IconSearch onClick={() => handleAddKeyword(nickname)} />
        </Form>
        <SuggestionWrap>
          {nickname.length > 0 && (
            <SuggestionList>
              {keywords.map((item: any) => {
                return (
                  <Text key={item.id}>
                    <p>
                      <IoPerson className='userIcon' />
                      {item.text}
                    </p>
                    <IoClose
                      className='CloseBtn'
                      onClick={() => handleRemoveKeyword(item.id)}
                    />
                  </Text>
                );
              })}
            </SuggestionList>
          )}
        </SuggestionWrap>
      </SearchWrap>
    </>
  );
};

export default Search;

const SearchWrap = styled.div`
  font-size: 1em;
  height: 66px;
  width: fit-content;
  margin: 0 auto;
`;

const Form = styled.form`
  width: fit-content;
  height: 100%;
  max-width: 670px;
  height: 50px;
  margin: 0 auto;
  font-size: 1em;
  display: flex;
  border: 4px solid white;
  border-radius: 32px;
  padding: 2px;
  color: white;
  overflow: hidden;
`;

const FormItem = styled.div`
  width: 840px;
  max-width: 48vw;
  min-width: 480px;
  height: 100%;
  display: flex;
  flex: 1;
  width: 0;
  min-width: 0;
  overflow: hidden;
  animation: ${expand('840px', '480px')} 0.5s 0.2s ease-in forwards;
`;

const InputSearch = styled.input`
  display: block;
  flex: 1;
  height: 100%;
  /* font-size: 1.2em; */
  background: transparent;
  border: 0;
  outline: none;
  color: inherit;
  padding: 0 10px 0 24px;
  &::placeholder {
    color: red;
    opacity: 0.5;
  }
`;

const IconSearch = styled.button`
  width: 100px;
  border: none;
  cursor: pointer;
  background: url(${Tmibtn}) center / 40% no-repeat;
`;

const SuggestionWrap = styled.div`
  width: calc(100% - 50px);
  margin: 0 auto;
`;
const SuggestionList = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  .userIcon {
    width: 25px;
    height: 17px;
    fill: ${(props) => props.theme.white.darker};
  }
`;
const Text = styled.li`
  display: flex;
  width: 100%;
  padding: 1.4rem;
  font-size: 0.8em;
  cursor: pointer;
  text-align: left;
  background: hsla(0, 0%, 100%, 0.2);
  .CloseBtn {
    cursor: pointer;
    width: 20px;
    height: 20px;
    fill: ${(props) => props.theme.white.darker};
    margin-left: auto;
    &:hover {
      fill: red;
    }
  }
  svg {
    margin-right: 0.6rem;
  }
  :hover {
    background: hsla(0, 0%, 100%, 0.3);
  }
`;
