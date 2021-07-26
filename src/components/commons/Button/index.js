import styled, { css } from 'styled-components';
import get from 'lodash/get';

const ButtonGhost = css`
  color: ${(props) => {
    return get(props.theme, `colors.${props.variant}.color`);
  }};
  background: transparent;
`;

const ButtonDefault = css`
  color: white;
  background-color: ${(props) => {
    return get(props.theme, `colors.${props.variant}.color`);
  }};
  color: ${(props) => {
    return get(props.theme, `colors.${props.variant}.contrastColor`);
  }};
`;

export const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;

  ${(props) => {
    if (props.ghost) {
      return ButtonGhost;
    }
    return ButtonDefault;
  }}

  // desestruturação para não precisar
  // escrever "props."
  transition: opacity ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};

  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;
