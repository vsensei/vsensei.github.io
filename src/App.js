import { useState } from 'react';
import './App.scss';
import projects, { githubProfile } from 'information/projects';
import technologies from 'information/technologies';
import MainInfo from 'components/main-info/main-info.component';
import TechInfo from 'components/tech-info/tech-info.component';
import Link from 'components/link/link.component';
const _ = require('lodash');

function App() {
  const [filteredTechnologies, setFilteredTechnologies] = useState(
    Object.fromEntries(technologies.map((tech) => [[tech], false]))
  );
  const [allFilters, setAllFilters] = useState(true);

  const getProjects = projects.map((project, index) => {
    const { screenshot, projectlink, githublink, logo, technologies, name } =
      project;
    const filteredTechnologiesArray = _.keys(_.pickBy(filteredTechnologies));
    const isIncludedInFilter =
      allFilters ||
      (filteredTechnologiesArray.every((tech) => technologies.includes(tech)) &&
        filteredTechnologiesArray.length);
    const shouldDisplay =
      screenshot && projectlink && logo && isIncludedInFilter;

    return shouldDisplay ? (
      <div
        className="project"
        key={index}
        style={{ backgroundImage: `url('images/${screenshot}')` }}
      >
        <div className="project-overlay">
          <div className="project-overlay-up">{name}</div>
          <div className="project-overlay-middle">
            <div className="links-container">
              <Link href={projectlink} className="link-url" image={logo} />
              <div className="link-separator" />
              <Link
                href={`${githubProfile}${githublink}`}
                className="link-url"
                image="github-logo.svg"
              />
            </div>
          </div>
          <div className="project-overlay-down">
            <TechInfo technologies={technologies} />
          </div>
        </div>
      </div>
    ) : null;
  });

  return (
    <div className="App">
      <div className="App-content">
        <div className="main">
          <MainInfo
            allFilters={allFilters}
            setAllFilters={setAllFilters}
            filteredTechnologies={filteredTechnologies}
            setFilteredTechnologies={setFilteredTechnologies}
            githubProfile={githubProfile}
          />
          <div className="projects-container">{getProjects}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
