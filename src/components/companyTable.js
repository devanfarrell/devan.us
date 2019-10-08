/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { useState } from "react"; // eslint-disable-line
import { motion } from "framer-motion";
import { colors, anchor } from "../style";

const Button = ({ onClick, children, index, activeindex }) => {
  return (
    <button
      css={buttonStyle(index === activeindex)}
      onClick={() => onClick(index)}
    >
      {children}
    </button>
  );
};

const CompanyTableBody = ({
  title,
  link,
  company,
  bullets,
  index,
  activeIndex
}) => {
  const display = activeIndex === index;
  return (
    <>
      {display && (
        <motion.div
          key={index}
          initial={{ y: 75, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -75, opacity: 1 }}
          css={jobBody}
        >
          <div css={titleRowStyle}>
            <h3 css={jobTitle}>
              {title}
              {link && (
                <a
                  target="_blank"
                  css={anchor}
                  href={link}
                  rel="noopener noreferrer"
                >
                  @{company}
                </a>
              )}
            </h3>
          </div>
          <div css={jobDescription}>
            {bullets.map((bullet, i) => (
              <div css={bulletRow} key={i}>
                <span css={bulletStyle} />
                <div css={bulletTextStyle}>{bullet}</div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
};

const CompanyTable = ({
  companies = [],
  titles = [],
  links = [],
  bullets = []
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div css={companyTableStyle}>
      <div css={companyNames}>
        {companies.map((company, i) => (
          <Button
            key={i}
            onClick={setActiveIndex}
            index={i}
            activeindex={activeIndex}
          >
            {company}
          </Button>
        ))}
      </div>
      {companies.map((company, i) => (
        <CompanyTableBody
          key={i}
          title={titles[i]}
          link={links[i]}
          company={companies[i]}
          bullets={bullets[i]}
          index={i}
          activeIndex={activeIndex}
        >
          {company}
        </CompanyTableBody>
      ))}
    </div>
  );
};

const companyTableStyle = css`
  display: flex;
  flex-direction: row;
  margin: 16px 0;
`;

const bulletRow = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const bulletStyle = css`
  display: inline-flex;
  flex: 0 0 auto;
  height: 6px;
  width: 6px;
  background-color: white;
  margin-right: 8px;
`;

const bulletTextStyle = css`
  padding: 5px 0;
`;

const titleRowStyle = css`
  color: white;
  margin: 30px 0 0 30px;
`;

const jobTitle = css`
  color: white;
  margin: 0;
`;


const jobDescription = css`
  white-space: pre-line;
  color: white;
  margin-left: 30px;
  line-height: 1.2;
`;

const buttonStyle = active => css`
  background-color: ${active ? "rgba(238, 159, 90, 0.15)" : "transparent"};
  border: none;
  color: ${colors.highlight};
  font-weight: bold;
  font-size: 20px;
  padding: 30px 0;
  text-align: center;
  border-left: 2px solid ${active ? colors.highlight : colors.grey500};
  outline: none;
  transition: 0.4s ease-in-out;
`;

export const companyNames = css`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  width: 175px;
`;

export const jobBody = css`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`;

export default CompanyTable;
