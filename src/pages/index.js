/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Layout from "../components/layout";
import SEO from "../components/seo";
import SectionLabel from "../components/sectionLabel";
import Image from "../components/image";
import FakeCode from "../atoms/fakeCode";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h5 css={intro}>Hello, my name is</h5>
    <h1 css={myName}>Devan Farrell</h1>
    <h2 css={subText}>I build awesome stuff on the internet</h2>
    <h6 css={subSubText}>
      I specialize in React web applications and rapid prototyping.
    </h6>
    <div css={homeSection}>
      <FakeCode />
      <div css={flexVertical}>
        <SectionLabel label="About" index="0" />
        <p css={paragraphText}>
          I'm Devan, a second-career software engineer at Pacific Northwest
          National Laboratory. Tofu locavore cred chambray crucifix synth etsy.
          Street art pabst gochujang tofu YOLO. Enamel pin fashion axe
          succulents mumblecore cardigan church-key taxidermy vinyl
          single-origin coffee gluten-free four dollar toast green juice
          bushwick heirloom. Cloud bread hell of actually locavore knausgaard
          put a bird on it.
        </p>
      </div>
      <div css={myFace}>
        <Image />
      </div>
    </div>
  </Layout>
);

const flexVertical = css`
  display: flex;
  flex-direction: column;
`;

const paragraphText = css`
  color: #e9f6fe;
  font-size: 1rem;
  line-height: 2rem;
`;

const homeSection = css`
  display: flex;
  position: relative;
  align-items: center;
  padding-top: 15rem;
  flex-direction row;
`;

const myName = css`
  color: #e9f6fe;
  display: block;
  margin: 0;
  padding: 0;
  font-weight: bold;
  text-rendering: optimize-legibility;
  font-size: 4.25rem;
  line-height: 1;
`;

const myFace = css`
  min-width: 200px;
  width: 100%;
  display: flex;
  flex: 1 1 auto;
  padding-left: 100px;
`;

const subText = css`
  color: #126191;
  display: block;
  margin: 0;
  padding: 0;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 3.75rem;
  line-height: 1;
`;

const intro = css`
  color: #1ea2f1;
  margin: 0;
  padding: 0;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 1.25rem;
`;
const subSubText = css`
  color: #e9f6fe;
  display: block;
  margin: 0;
  padding: 0;
  font-size: 1.25rem;
  text-rendering: optimizeLegibility;
  font-weight: normal;
  margin-top: 15px;
`;

export default IndexPage;
