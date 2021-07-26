import { css } from 'styled-components';
import { breakpoints } from '../breakpoints';

export const breakpointsMedia = (cssByBreakpoints) => {
  const breakpointsNames = Object.keys(cssByBreakpoints);

  return breakpointsNames.map((breakpointName) => {
    return css`
      @media screen and (min-width: ${breakpoints[breakpointName]}px) {
        ${cssByBreakpoints[breakpointName]}
      }
    `;
  });
};
