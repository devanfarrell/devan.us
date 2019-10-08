/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Layout from "../components/layout";
import SEO from "../components/seo";
import SectionLabel from "../components/sectionLabel";
import Image from "../components/image";
import CompanyTable from "../components/companyTable";
import { vars, flexVertical, colors, paragraph } from "../style";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h5 css={intro}>Hello, my name is</h5>
    <h1 css={myName}>Devan Farrell.</h1>
    <h2 css={subText}>I build awesome stuff on the internet</h2>
    <h6 css={subSubText}>
      I specialize in React web applications and rapid prototyping.
    </h6>
    <div css={inverseFace}>
      <Image />
    </div>
    <div css={homeSection}>
      <div css={flexVertical}>
        <SectionLabel label="About" index="0" />
        <p css={paragraph}>
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
    <div css={flexVertical}>
      <SectionLabel label="History" index="1" />
      <CompanyTable
        companies={["PNNL", "Remitly", "USAF"]}
        titles={[
          "Software Engineer",
          "Software Development Engineer Intern",
          "Staff Sergeant"
        ]}
        links={["https://www.pnnl.gov", "https://www.remitly.com", null]}
        bullets={[
          [
            "Led team of 7 as scrum master; set priorities, created tasks, and kept project on time and on budget… funded additional $1.1 million",
            "Engineered a hierarchical term data web visualization; integrated webGL and physics engines… completed two deliverables",
            "Identified knowledge gap in integrating with web sockets; created reusable design templates… presented work at group meetup"
          ],
          [
            "Built foundation for a new document scraping vendor in an existing micro-service",
            "Joined Compliance Experience Team; functioned as a full-stack developer... tackled long standing bugs"
          ],
          [
            "Worked as a liaison between producers and consumers of military intelligence",
            "First-line supervisor of 9+ collection operators using $85M systems"
          ]
        ]}
      />
    </div>
    <div css={flexVertical}>
      <SectionLabel label="Projects" index="2" />
      <h5 css={projectName}>GateViz</h5>
      <p css={paragraph}>
        A combinational logic circuit education tool and visualization.
      </p>
    </div>
  </Layout>
);

const homeSection = css`
  display: flex;
  position: relative;
  align-items: center;
  margin: 1.5rem 0;
  padding: 3.5rem 0;
  flex-direction row;
`;

const myName = css`
  color: ${colors.offWhite};
  display: block;
  margin: 0;
  margin-bottom: 15px;
  padding: 0;
  font-weight: bold;
  text-rendering: optimize-legibility;
  font-size: 5rem;
  line-height: 1;
`;

const myFace = css`
  min-width: 200px;
  width: 100%;
  display: none;

  flex: 1 1 auto;
  padding-left: 75px;
  @media (min-width: ${vars.smallBreakPoint}) {
    display: flex;
  }
`;

const inverseFace = css`
  min-width: 200px;
  width: 50%;
  margin: 2rem auto;
  @media (min-width: ${vars.smallBreakPoint}) {
    display: none;
    margin: 0;
  }
`;

const subText = css`
  color: ${colors.accent};
  display: block;
  margin: 0;
  margin-bottom: 20px;
  padding: 0;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 3.75rem;
  line-height: 1.2;
`;

const intro = css`
  color: ${colors.highlight};
  margin: 0;
  margin-bottom: 30px;
  padding: 0;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 1.25rem;
`;
const subSubText = css`
  color: ${colors.offWhite};
  display: block;
  margin: 0;
  padding: 0;
  font-size: 1.25rem;
  text-rendering: optimizeLegibility;
  font-weight: normal;
  margin-top: 15px;
`;

const projectName = css`
  color: ${colors.highlight};
  display: block;
  margin: 0;
  padding: 0;
  font-size: 1.25rem;
  text-rendering: optimizeLegibility;
  font-weight: bold;
  margin-top: 15px;
`;

export default IndexPage;
