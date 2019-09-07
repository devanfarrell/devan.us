import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Logo from "./logo";
import styled from "@emotion/styled";

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderInnerWrapper>
      <StyledLogoLink to="/">
        <Logo />
      </StyledLogoLink>
      <LinksBlock>
        <PlainLink to="/">About</PlainLink>
        <PlainLink to="/blog">Blog</PlainLink>
        <ResumeLink to="/resume">Resume</ResumeLink>
      </LinksBlock>
    </HeaderInnerWrapper>
  </HeaderWrapper>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

const HeaderWrapper = styled.header`
  background: #2f2b2c;
  margin-bottom: 1.45rem;
`;

const HeaderInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;
`;

const StyledLogoLink = styled(Link)`
  width: 40px;
  fill: #1ea2f1;
`;

const LinksBlock = styled.div`
  display: inline-block;
`;

const PlainLink = styled(Link)`
  color: #e9f6fe;
  text-decoration: none;
  margin-left: 58px;
`;

const ResumeLink = styled(Link)`
  color: #1ea2f1;
  border: solid 2px #1ea2f1;
  text-decoration: none;
  padding: 12px 25px;
  border-radius: 3px;
  margin-left: 58px;
`;

export default Header;
