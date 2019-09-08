/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import styled from "@emotion/styled";

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
      <PageBodyWrapper>
        <main>{children}</main>
      </PageBodyWrapper>
      <Footer>
        © {new Date().getFullYear()}, Built with
        {`  `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </Footer>
    </>
  );
};

const Footer = styled.footer`
  background-color: hotpink;
  display: flex;
  padding: 1.45rem 1.0875rem;
`;

const PageBodyWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  min-height: 90vh;
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
