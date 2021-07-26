import styled, { css } from 'styled-components';

const ButtonGhost = css`
  color: #d7385e;
  background: transparent;
`;

const ButtonDefault = css`
  color: white;
  background-color: ${function (props) {
    return props.theme.colors.primary.main.color;
  }};
  color: ${function (props) {
    return props.theme.colors.primary.main.contrastText;
  }};
`;

export const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  border-radius: 8px;
  background: #d7385e;

  ${function (props) {
    if (props.ghost) {
      return ButtonGhost;
    }
    return ButtonDefault;
  }}

  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;
