import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Logo from "./logo";

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#2F2B2C`,
      marginBottom: `1.45rem`
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: `0 auto`,
        padding: `1.45rem 1.0875rem`
      }}
    >
      <Link to="/">
        <Logo style={{ width: "40px", fill: "#1ea2f1" }} />
      </Link>
      <div style={{ display: "inlineBlock" }}>
        <Link
          to="/"
          style={{
            color: "#E9F6FE",
            textDecoration: 'none',
            marginLeft: '58px'
          }}
        >
          About
        </Link>
        <Link
          to="/blog"
          style={{
            color: "#E9F6FE",
            textDecoration: 'none',
            marginLeft: '58px'
          }}
        >
          Blog
        </Link>
        <Link
          to="/resume"
          style={{
            color: "#1EA2F1",
            border: "solid 2px #1EA2F1",
            textDecoration: "none",
            padding: "12px 25px",
            borderRadius: "3px",
            marginLeft: '58px'
          }}
        >
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

export default Header;
