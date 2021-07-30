import { css } from 'styled-components';
import breakpoints from '../breakpoints';

const breakpointsMedia = (cssByBreakpoints) => {
  const breakpointsNames = Object.keys(cssByBreakpoints);

  return breakpointsNames.map(
    (breakpointName) => css`
      @media screen and (min-width: ${breakpoints[breakpointName]}px) {
        ${cssByBreakpoints[breakpointName]}
      }
    `,
  );
};

export default breakpointsMedia;
