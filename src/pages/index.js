import React from "react";
import styled from "@emotion/styled";
import Layout from "../components/layout";
import SEO from "../components/seo";
import SectionLabel from "../components/sectionLabel";
import Image from "../components/image";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro>Hello, my name is</Intro>
    <MyName>Devan Farrell</MyName>
    <SubText>I build awesome stuff on the internet</SubText>
    <SubSubText>
      I specialize in React web applications and rapid prototyping.
    </SubSubText>
    <AboutSection>
      <FakeCode />
      <FlexVertical>
        <SectionLabel label="About" index="0" />
        <ParagraphText>
          I'm Devan, a second-career software engineer at Pacific Northwest
          National Laboratory. Tofu locavore cred chambray crucifix synth etsy.
          Street art pabst gochujang tofu YOLO. Enamel pin fashion axe
          succulents mumblecore cardigan church-key taxidermy vinyl
          single-origin coffee gluten-free four dollar toast green juice
          bushwick heirloom. Cloud bread hell of actually locavore knausgaard
          put a bird on it.
        </ParagraphText>
      </FlexVertical>

      <MyFace>
        <Image />
      </MyFace>
    </AboutSection>
  </Layout>
);

const FakeCode = () => (
  <svg
    viewBox="0 0 1150 628"
    style={{
      fillOpacity: 0.15,
      position: "absolute",
      left: "1.0875rem",
      width: "90vw",
      padding: "5rem 0",
      maxWidth: "1300px"
    }}
  >
    <path
      d="M15.13,7.565c0,-4.175 -3.389,-7.565 -7.565,-7.565c-4.175,0 -7.565,3.39 -7.565,7.565l0,612.785c0,4.175 3.39,7.565 7.565,7.565c4.176,0 7.565,-3.39 7.565,-7.565l0,-612.785Z"
      style={{ fill: "#939498" }}
    />
    <path
      d="M166.472,41.609c0,-10.439 -8.475,-18.913 -18.913,-18.913l-83.218,0c-10.438,0 -18.913,8.474 -18.913,18.913c0,10.438 8.475,18.913 18.913,18.913l83.218,0c10.438,0 18.913,-8.475 18.913,-18.913Z"
      style={{ fill: "#ff7a83" }}
    />
    <path
      d="M287.516,132.392c0,-10.439 -8.475,-18.913 -18.913,-18.913l-83.218,0c-10.438,0 -18.913,8.474 -18.913,18.913c0,10.438 8.475,18.913 18.913,18.913l83.218,0c10.438,0 18.913,-8.475 18.913,-18.913Z"
      style={{ fill: "#ff7a83" }}
    />
    <path
      d="M287.516,223.175c0,-10.439 -8.475,-18.914 -18.913,-18.914l-83.218,0c-10.438,0 -18.913,8.475 -18.913,18.914c0,10.438 8.475,18.913 18.913,18.913l83.218,0c10.438,0 18.913,-8.475 18.913,-18.913Z"
      style={{ fill: "#ff7a83" }}
    />
    <path
      d="M287.516,495.523c0,-10.438 -8.475,-18.913 -18.913,-18.913l-83.218,0c-10.438,0 -18.913,8.475 -18.913,18.913c0,10.439 8.475,18.913 18.913,18.913l83.218,0c10.438,0 18.913,-8.474 18.913,-18.913Z"
      style={{ fill: "#ff7a83" }}
    />
    <path
      d="M166.472,586.306c0,-10.438 -8.475,-18.913 -18.913,-18.913l-83.218,0c-10.438,0 -18.913,8.475 -18.913,18.913c0,10.438 8.475,18.913 18.913,18.913l83.218,0c10.438,0 18.913,-8.475 18.913,-18.913Z"
      style={{ fill: "#1b91d8" }}
    />
    <path
      d="M317.777,586.306c0,-10.438 -8.475,-18.913 -18.913,-18.913l-83.218,0c-10.438,0 -18.913,8.475 -18.913,18.913c0,10.438 8.475,18.913 18.913,18.913l83.218,0c10.438,0 18.913,-8.475 18.913,-18.913Z"
      style={{ fill: "#ad7d9a" }}
    />
    <path
      d="M408.553,313.957c0,-10.438 -8.474,-18.913 -18.913,-18.913l-83.217,0c-10.439,0 -18.914,8.475 -18.914,18.913c0,10.439 8.475,18.914 18.914,18.914l83.217,0c10.439,0 18.913,-8.475 18.913,-18.914Z"
      style={{ fill: "#ff7a83" }}
    />
    <path
      d="M469.08,41.609c0,-10.439 -8.475,-18.913 -18.913,-18.913l-234.524,0c-10.439,0 -18.913,8.474 -18.913,18.913c0,10.438 8.474,18.913 18.913,18.913l234.524,0c10.438,0 18.913,-8.475 18.913,-18.913Z"
      style={{ fill: "#d1d2d4" }}
    />
    <path
      d="M741.427,132.392c0,-10.439 -8.475,-18.913 -18.913,-18.913l-385.827,0c-10.439,0 -18.913,8.474 -18.913,18.913c0,10.438 8.474,18.913 18.913,18.913l385.827,0c10.438,0 18.913,-8.475 18.913,-18.913Z"
      style={{ fill: "#d1d2d4" }}
    />
    <path
      d="M620.38,223.175c0,-10.439 -8.475,-18.914 -18.913,-18.914l-264.78,0c-10.439,0 -18.913,8.475 -18.913,18.914c0,10.438 8.474,18.913 18.913,18.913l264.78,0c10.438,0 18.913,-8.475 18.913,-18.913Z"
      style={{ fill: "#d1d2d4" }}
    />
    <path
      d="M590.122,495.523c0,-10.438 -8.475,-18.913 -18.913,-18.913l-234.522,0c-10.439,0 -18.913,8.475 -18.913,18.913c0,10.439 8.474,18.913 18.913,18.913l234.522,0c10.438,0 18.913,-8.474 18.913,-18.913Z"
      style={{ fill: "#d1d2d4" }}
    />
    <path
      d="M650.641,313.957c0,-10.438 -8.475,-18.913 -18.913,-18.913l-174.001,0c-10.438,0 -18.913,8.475 -18.913,18.913c0,10.439 8.475,18.914 18.913,18.914l174.001,0c10.438,0 18.913,-8.475 18.913,-18.914Z"
      style={{ fill: "#d1d2d4" }}
    />
    <path
      d="M620.38,404.74c0,-10.438 -8.475,-18.913 -18.913,-18.913l-295.044,0c-10.439,0 -18.914,8.475 -18.914,18.913c0,10.439 8.475,18.913 18.914,18.913l295.044,0c10.438,0 18.913,-8.474 18.913,-18.913Z"
      style={{ fill: "#d1d2d4" }}
    />
    <path
      d="M892.729,313.957c0,-10.438 -8.475,-18.913 -18.914,-18.913l-174,0c-10.438,0 -18.913,8.475 -18.913,18.913c0,10.439 8.475,18.914 18.913,18.914l174,0c10.439,0 18.914,-8.475 18.914,-18.914Z"
      style={{ fill: "#ffee82" }}
    />
    <path
      d="M771.684,495.523c0,-10.438 -8.474,-18.913 -18.913,-18.913l-113.478,0c-10.438,0 -18.913,8.475 -18.913,18.913c0,10.439 8.475,18.913 18.913,18.913l113.478,0c10.439,0 18.913,-8.474 18.913,-18.913Z"
      style={{ fill: "#ffee82" }}
    />
    <path
      d="M866.786,223.175c0,-10.439 -8.475,-18.914 -18.913,-18.914l-178.319,0c-10.438,0 -18.913,8.475 -18.913,18.914c0,10.438 8.475,18.913 18.913,18.913l178.319,0c10.438,0 18.913,-8.475 18.913,-18.913Z"
      style={{ fill: "#ad7d9a" }}
    />
    <path
      d="M953.25,404.74c0,-10.438 -8.474,-18.913 -18.913,-18.913l-264.783,0c-10.438,0 -18.913,8.475 -18.913,18.913c0,10.439 8.475,18.913 18.913,18.913l264.783,0c10.439,0 18.913,-8.474 18.913,-18.913Z"
      style={{ fill: "#ad7d9a" }}
    />
    <path
      d="M801.946,41.609c0,-10.439 -8.475,-18.913 -18.913,-18.913l-264.784,0c-10.438,0 -18.913,8.474 -18.913,18.913c0,10.438 8.475,18.913 18.913,18.913l264.784,0c10.438,0 18.913,-8.475 18.913,-18.913Z"
      style={{ fill: "#98f5a1" }}
    />
    <path
      d="M1149.95,132.392c0,-10.439 -8.474,-18.913 -18.913,-18.913l-340.435,0c-10.439,0 -18.913,8.474 -18.913,18.913c0,10.438 8.474,18.913 18.913,18.913l340.435,0c10.439,0 18.913,-8.475 18.913,-18.913Z"
      style={{ fill: "#98f5a1" }}
    />
  </svg>
);

const FlexVertical = styled.div`
  display: flex;
  flex-direction: column;
`;

const ParagraphText = styled.p`
  color: #e9f6fe;
  font-size: 1rem;
  line-height: 2rem;
`;

const AboutSection = styled.div`
  display: flex;
  align-items: center;
  padding-top: 15rem;
  flex-direction row;
`;

const MyName = styled.h1`
  color: #e9f6fe;
  display: block;
  margin: 0;
  padding: 0;
  font-weight: bold;
  text-rendering: optimize-legibility;
  font-size: 4.25rem;
  line-height: 1;
`;

const MyFace = styled.div`
  min-width: 200px;
  width: 100%;
  display: flex;
  flex: 1 1 auto;
  padding-left: 100px;
`;

const SubText = styled.h2`
  color: #126191;
  display: block;
  margin: 0;
  padding: 0;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 3.75rem;
  line-height: 1;
`;

const Intro = styled.h5`
  color: #1ea2f1;
  margin: 0;
  padding: 0;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 1.25rem;
`;
const SubSubText = styled.h6`
  color: #e9f6fe;
  display: block;
  margin: 0;
  padding: 0;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 1rem;
`;

export default IndexPage;
