/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const SectionLabel = ({ index, label }) => {
  return (
    <div css={sectionHeader}>
      <span css={sectionLabelIndex}>[{index}]</span>
      <span css={sectionLabelText}>{label}</span>
      <span css={sectionLabelLine}/>
    </div>
  );
};

const sectionHeader = css`
  display: flex;
  align-items: center;
`;

const sectionLabelIndex = css`
  color: #126191;
  padding-right: 5px;
`;

const sectionLabelText = css`
  color: #e9f6fe;
  padding-right: 5px;
`;

const sectionLabelLine = css`
  background-color: #939498;
  height: 1px;
  width: 100%;
`;

export default SectionLabel;
