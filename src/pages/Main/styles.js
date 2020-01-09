import styled, { keyframes, css } from "styled-components";

const rotate = keyframes`
from{
transform: rotate(0deg);
}
to {
    transform: rotate(360deg);
}

`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 5px;
    font-size: 16px;
  }
`;

export const SubmiButton = styled.button.attrs(props => ({
  type: "submit",
  disabled: props.loading
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fe6f61;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 5px;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & + li {
      border-top: 1px solid #eee;
    }

    a {
      color: #333;
      text-decoration: none;
    }
  }
`;
