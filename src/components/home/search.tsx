import React, { useCallback, useEffect, useState } from 'react';
import { keyframes } from 'styled-components';
import MarginTop from '../marginTop';
import Tmibtn from '../../assets/tmibtn.svg';
import { getUserNicknameData } from '../../service/API/api';
import styled from 'styled-components';
import { IoPerson, IoClose } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios, { AxiosError } from 'axios';
import {
  API_KEY,
  BASE_URL,
  JSON_HEADER,
} from '../../service/shared/api-constant';
import SelectType, { ISelectOption } from './selectType';

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
  // const [userName, setUserName] = useState(
  //   JSON.parse(localStorage.getItem('Nickname') || '')
  // );

  const SEARCH_OPTIONS = Object.freeze([
    {
      id: 0,
      name: '유저',
      value: 'user',
      placeholder: '카트라이더 닉네임을 입력',
    },
    {
      id: 1,
      name: '카트',
      value: 'kart',
      placeholder: '카트바디 이름을 입력',
    },
    {
      id: 2,
      name: '트랙',
      value: 'track',
      placeholder: '트랙 이름을 입력',
    },
  ]);

  const [searchOption, setSearchOption] = useState<ISelectOption>(
    SEARCH_OPTIONS[0]
  );

  const navigtor = useNavigate();

  useEffect(() => {
    localStorage.setItem('keywords', JSON.stringify(keywords));
    // localStorage.setItem('Nickname', JSON.stringify(userName));
  }, [keywords]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickName(e.target.value);
  };

  const getUserNicknameData = (nickname: string) => {
    axios
      .get(BASE_URL + `users/nickname/${nickname}`, {
        headers: {
          Authorization: API_KEY,
          ...JSON_HEADER,
        },
      })
      .then((res) => {
        localStorage.setItem('Nickname', JSON.stringify(res.data));
        navigtor(`/user/${nickname}`);
      })
      .catch((error) => alert('해당없음'));
  };

  const onForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getUserNicknameData(nickname);
    setNickName('');
  };

  const handleAddKeyword = (nickname: string) => {
    const newKeyword = {
      id: Date.now(),
      text: nickname,
    };
    setKeywords([newKeyword, ...keywords]);
  };

  const handleRemoveKeyword = (id: number) => {
    const nextKeyword = keywords.filter((Keyword: any) => {
      return Keyword.id !== id;
    });
    setKeywords(nextKeyword);
  };

  const handleChangeType = useCallback(
    (target: ISelectOption) => {
      setSearchOption(target);
    },
    [setSearchOption]
  );

  return (
    <>
      <MarginTop margin={90} />
      <SearchWrap>
        <Form onSubmit={onForm}>
          <FormItem>
            {/* <SelectBox> */}
            <SelectType options={SEARCH_OPTIONS} onChange={handleChangeType} />
            {/* </SelectBox> */}
            <InputSearch
              placeholder={searchOption.placeholder}
              value={nickname}
              onChange={onChange}
            />
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

const inputWidth = '24em';
const height = '2.44em';
const selectWidth = '5em';
const borderSize = '5px solid';

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
  background: transparent;
  border: 0;
  outline: none;
  color: inherit;
  padding: 0 10px 0 24px;
  &::placeholder {
    color: ${(props) => props.theme.white.darker};
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
// const SelectBox = styled.div`
//   label {
//     position: relative;
//     display: block;
//     box-sizing: border-box;
//     top: 39px;
//     width: ${selectWidth};
//     height: ${height};
//     line-height: ${height};
//     font-weight: 400;
//     font-size: 16px;
//     color: ${({ theme }) => theme.white.darker};
//     background: transparent;
//     border-right: 1px solid ${({ theme }) => theme.white.darker};
//     padding-left: 0 10px;
//     &::before {
//       right: 1.5%;
//       width: 0;
//       height: 0;
//       border-left: ${borderSize} transparent;
//       border-right: ${borderSize} transparent;
//       border-top: ${borderSize} ${({ theme }) => theme.white.darker};
//       margin-right: 10px;
//     }
//   }
//   select {
//     width: ${selectWidth};
//     height: ${height};
//     line-height: ${height};
//     font-weight: 400;
//     font-size: 15px;
//     border: 0;
//     /* opacity: 0; */
//     appearance: none;
//     vertical-align: middle;
//     option {
//       background-color: transparent;
//     }
//   }
// `;
