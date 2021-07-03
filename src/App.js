import { useState } from 'react';
import './App.scss';
import projects, { githubProfile } from './information/projects';
import technologies from './information/technologies';
import MainInfo from './components/main-info/main-info.component';
import TechInfo from './components/tech-info/tech-info.component';

function App() {
  const [filteredTechnologies, setFilteredTechnologies] = useState(
    Object.fromEntries(technologies.map((tech) => [[tech], false]))
  );
  const [allFilters, setAllFilters] = useState(true);

  const getProjects = projects.map((project, index) => {
    const { screenshot, projectlink, githublink, logo, technologies, name } =
      project;
    return screenshot &&
      projectlink &&
      logo &&
      (allFilters ||
        technologies.reduce(
          (acc, tech) => (acc += filteredTechnologies[tech] ? 1 : 0),
          0
        )) ? (
      <div
        className="project"
        key={index}
        style={{ backgroundImage: `url('images/${screenshot}')` }}
      >
        <div className="project-overlay">
          <div className="project-overlay-up">{name}</div>
          <div className="project-overlay-middle">
            <div className="links-container">
              <a href={projectlink} target="_blank" rel="noreferrer nofollow">
                <div
                  className="link-url"
                  style={{
                    backgroundImage: `url('images/${logo}')`,
                  }}
                ></div>
              </a>
              <div className="link-separator" />
              <a
                href={`${githubProfile}${githublink}`}
                target="_blank"
                rel="noreferrer nofollow"
              >
                <div
                  className="link-url"
                  style={{
                    backgroundImage: `url('images/github-logo.svg')`,
                  }}
                ></div>
              </a>
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
