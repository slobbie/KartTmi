import styled, { css } from 'styled-components';

interface propsDataModal {
  children: any;
  color: string;
}

const Sub = ({ children, color }: propsDataModal) => {
  return <SubPar color={color}>{children}</SubPar>;
};

export default Sub;

const SubPar = styled.p`
  font-size: 12px;
  font-weight: 400;
  padding-left: 10px;
  color: ${({ theme }) => theme.white.darker};
  span {
    font-weight: 500;
    margin-right: 5px;
  }
  ${({ color }) =>
    color === 'black' &&
    css`
      color: ${({ theme }) => theme.black.darker};
      text-align: left;
      padding-left: 0;
      span {
        margin: 0;
      }
    `}
`;
