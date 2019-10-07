/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import Logo from "./logo";
import { colors } from "../style";

const Header = ({ siteTitle }) => (
  <header css={headerWrapper}>
    <div css={headerInnerWrapper}>
      <Link css={styledLogoLink} to="/">
        <Logo />
      </Link>
      <div css={linksBlock}>
        <Link css={plainLink} to="/">
          About
        </Link>
        <Link css={plainLink} to="/blog">
          Blog
        </Link>
        <Link css={resumeLink} to="/resume">
          Resume
        </Link>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

const headerWrapper = css`
  background: ${colors.background};
  padding-bottom: 1.45rem;
`;

const headerInnerWrapper = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;
`;

const styledLogoLink = css`
  width: 40px;
  fill: ${colors.highlight};
`;

const linksBlock = css`
  display: inline-block;
`;

const plainLink = css`
  color: ${colors.offWhite};
  text-decoration: none;
  margin-left: 58px;
`;

const resumeLink = css`
  color: ${colors.highlight};
  border: solid 2px ${colors.highlight};
  text-decoration: none;
  padding: 12px 25px;
  border-radius: 3px;
  margin-left: 58px;
`;

export default Header;
