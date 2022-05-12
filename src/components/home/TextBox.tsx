import styled from 'styled-components';
const TextBox = () => {
  return (
    <Box>
      <h2></h2>
    </Box>
  );
};

export default TextBox;

const Box = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 1000px;
  max-height: 330px;
  height: 330px;
  width: 100%;
  top: -70px;
  background-color: tomato;
`;
