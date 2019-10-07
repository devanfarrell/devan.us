/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { colors } from "../style";

const SectionLabel = ({ index, label }) => {
  return (
    <div css={sectionHeader}>
      <span css={sectionLabelIndex}>[{index}]</span>
      <span css={sectionLabelText}>{label}</span>
      <span css={sectionLabelLine} />
    </div>
  );
};

const sectionHeader = css`
  display: flex;
  align-items: center;
`;

const sectionLabelIndex = css`
  color: ${colors.accent};
  padding-right: 5px;
`;

const sectionLabelText = css`
  color: ${colors.offWhite};
  padding-right: 5px;
`;

const sectionLabelLine = css`
  background-color: ${colors.grey500};
  height: 1px;
  width: 100%;
`;

export default SectionLabel;
