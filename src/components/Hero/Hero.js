import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, <br />
        My name is Dan...
      </SectionTitle>
      <SectionText>Dad, Husband, Phone Fixer, Web Developer</SectionText>
      <Button onClick={() => (window.location = "mailto:dannstarr@gmail.com")}>
        Contact Me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
