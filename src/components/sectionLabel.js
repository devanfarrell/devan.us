import React from "react";

import styled from "@emotion/styled";

const SectionLabel = ({ index, label }) => {
  return (
    <SectionHeader>
      <SectionLabelIndex>[{index}]</SectionLabelIndex>
      <SectionLabelText>{label}</SectionLabelText>
      <SectionLabelLine />
    </SectionHeader>
  );
};

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
`;

const SectionLabelIndex = styled.span`
  color: #126191;
  padding-right: 5px;
`;

const SectionLabelText = styled.span`
  color: #e9f6fe;
  padding-right: 5px;
`;

const SectionLabelLine = styled.span`
  background-color: #939498;
  height: 1px;
  width: 100%;
`;

export default SectionLabel;
