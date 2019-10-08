import { css } from "@emotion/core";

export const colors = {
  background: "#2f2b2c",
  highlight: "#EE9F5A",
  offWhite: "#e9f6fe",
  accent: "#B97E4C",
  grey500: "#75797C"
};

export const vars = {
  smallBreakPoint: "800px",
  largeBreakPoint: "1000px"
};

export const flexVertical = css`
  display: flex;
  flex-direction: column;
`;

export const flexHorizontal = css`
  display: flex;
  flex-direction: row;
`;

export const anchor = css`
  color: ${colors.highlight};
  margin-left: 5px;
  text-decoration: none;
`;

export const paragraph = css`
  color: ${colors.offWhite};
  font-size: 1.1rem;
  line-height: 2rem;
`;
