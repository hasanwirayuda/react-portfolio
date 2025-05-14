// eslint-disable-next-line no-unused-vars
import React from 'react';
import './skills.css';
import Frameworks from './Frameworks';
import DeveloperTools from './DeveloperTools';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>
      <div className="skills__container container grid">
        <Frameworks />
        <DeveloperTools />
      </div>
    </section>
  );
};

export default Skills;
