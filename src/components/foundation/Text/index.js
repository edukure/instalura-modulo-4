import styled, { css } from 'styled-components';

const TextBase = styled.span`
  ${(props) => {
    if(props.variant === "smallestException") {
      return css`
        font-size: ${({theme}) => theme.typographyVariants.smallestException.fontSize};
        font-weight: ${({theme}) => theme.typographyVariants.smallestException.fontWeight};
        line-height: ${({theme}) => theme.typographyVariants.smallestException.lineHeight};
      `
    }
  }}
`;

export default function Text({ tag, variant, children }) {
  return (
    <TextBase as={tag} variant={variant}>
      {children}
    </TextBase>
  );
}

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
};
