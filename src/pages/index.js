import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h5 style={{ color: "#1EA2F1" }}>Hello, my name is</h5>
    <h1 style={{ color: "#E9F6FE", display: "block" }}>Devan Farrell</h1>
    <h2 style={{ color: "#126191", display: "block" }}>
      I build awesome stuff on the internet
    </h2>

    <h6 style={{ color: "#E9F6FE", display: "block" }}>
      I specialize in React web applications and rapid prototyping.
    </h6>
    <div>
      {" "}
      <span>[0]</span>
      <span>About</span>
      <span>
        <div/>
      </span>
    </div>
  </Layout>
);

export default IndexPage;
