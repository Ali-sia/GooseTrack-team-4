import { css } from 'styled-components';

const breakpoints = {
  mobile: 375,
  tablet: 768,
  laptop: 1440,
};

export const media = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}px) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});

export const between = (firstBreakpoint, secondBreakpoint, styles) => css`
  @media (min-width: ${breakpoints[
      firstBreakpoint
    ]}px) and (max-width: ${breakpoints[secondBreakpoint] - 1}px) {
    ${styles}
  }
`;

// ${between(
//   'sm',
//   'lg',
//   `background-color: blue; display: flex;
// justify-content: space-between;`
// )}

export const greaterThan = (breakpoint, styles) => css`
  @media (min-width: ${breakpoints[breakpoint]}px) {
    ${styles}
  }
`;
// ${greaterThan(
//   'md',
//   `background-color: yellow;
// `
// )}

export const lesserThan = (breakpoint, styles) => css`
  @media (max-width: ${breakpoints[breakpoint] - 1}px) {
    ${styles}
  }
`;
// ${lesserThan(
//   'md',
//   `background-color: red;
// text-weight:900`
// )}