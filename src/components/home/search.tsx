import { useCallback, useState, useMemo, FormEvent } from 'react';
import { keyframes } from 'styled-components';
import styled, { css } from 'styled-components';
import MarginTop from '../marginTop';

export const expand = (width: string, minWidth: string) => keyframes`
  100%{
    width: ${width};
    min-width: ${minWidth}
  }
`;

function Search({ size }: { size?: string }) {
  return (
    <>
      <MarginTop margin={90} />
      <SearchWrap size={size}>
        <Form>
          <FormItem>
            <InputSearch />
          </FormItem>

          <IconSearchMini></IconSearchMini>

          <IconSearch />
        </Form>
        <SuggestionWrap>
          <SuggestionList>
            <Text>Hi</Text>
          </SuggestionList>
        </SuggestionWrap>
      </SearchWrap>
    </>
  );
}

Search.defaultProps = { size: null };
export default Search;
const SearchWrap = styled.div`
  font-size: 1em;
  height: 66px;
  width: fit-content;
  margin: 0 auto;
  ${({ size }: { size?: string }) =>
    size === 'mini' &&
    css`
      display: inline-block;
      height: fit-content;
      max-width: fit-content;
      overflow: hidden;
      float: right;
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);
      margin: 0;
      margin-left: auto;
      transition: all 300ms ease 0ms;
      font-size: 0.88em;
      opacity: 1;
      ${Form} {
        opacity: 0.5;
        border: 0;
        border-radius: 0;
      }
      &:hover,
      &:focus,
      &:active {
        border-color: white;
        ${Form} {
          opacity: 1;
        }
      }
      ${FormItem} {
        animation: none;
        width: 200px;
      }
      ${InputSearch} {
        height: 32px;
        padding-left: 4px;
        &::placeholder {
          color: white;
          opacity: 1;
        }
        &:hover,
        &:focus,
        &:active {
          opacity: 1;
        }
      }
    `}
`;

const Form = styled.form`
  width: fit-content;
  height: 100%;
  max-width: 670px;
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
  font-size: 1.2em;
  background: transparent;
  border: 0;
  outline: none;
  color: inherit;
  padding: 0 10px 0 24px;
  &::placeholder {
    color: white;
    opacity: 0.5;
  }
`;

const IconSearch = styled.button`
  width: 100px;
  background: url() center / 40% no-repeat;
`;
const IconSearchMini = styled.button`
  > svg {
    width: 20px;
    height: 20px;
  }
  color: white;
  background: 0;
`;

const SuggestionWrap = styled.div`
  width: calc(100% - 50px);
  margin: 0 auto;
`;
const SuggestionList = styled.ul``;
const Text = styled.li`
  padding: 1.4rem;
  font-size: 0.8em;
  cursor: pointer;
  text-align: left;
  background: hsla(0, 0%, 100%, 0.2);
  svg {
    margin-right: 0.6rem;
  }
  :hover {
    background: hsla(0, 0%, 100%, 0.3);
  }
`;
