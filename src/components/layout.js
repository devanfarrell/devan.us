/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from "react"; // eslint-disable-line
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { vars, colors, anchor } from "../style";

import Header from "./header";

import "./layout.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div css={pageBodyWrapper}>
        <main>{children}</main>
      </div>
      <footer css={footer}>
        © {new Date().getFullYear()}, Designed and developed by Devan Farrell.
        Built with
        {`  `}
        <a css={anchor} href="https://www.gatsbyjs.org">
          Gatsby
        </a>
      </footer>
    </>
  );
};

const footer = css`
  background-color: ${colors.background};
  display: flex;
  justify-content: center;
  padding: 1.45rem 1.0875rem;
  color: ${colors.offWhite};
`;

const pageBodyWrapper = css`
  background-color: ${colors.background};
  padding: 0px 20px 1.45rem 20px;
  padding-top: 0;
  min-height: 90vh;

  @media (min-width: ${vars.smallBreakPoint}) {
    padding: 0px 120px 1.45rem 120px;
  }
  @media (min-width: ${vars.largeBreakPoint}) {
    padding: 0px 200px 1.45rem 200px;
  }
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
