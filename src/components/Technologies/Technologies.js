import React from 'react';
import { DiFirebase, DiReact, DiZend, DiMongodb, DiNodejs, DiPhotoshop, DiNodejsSmall } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I am currently expanding my knowledge of Javascript so that I can go forwards and master front end frameworks such as React, as well as back end technologies like Node JS. I've got some pretty big ideas I need to build!
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPhotoshop size="3rem" />
        <ListContainer>
          <ListTitle>Logo Design</ListTitle>
          <ListParagraph>
            Experience with <br />
            Affinity Designer
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
