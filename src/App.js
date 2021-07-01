import { useState } from 'react';
import './App.scss';
import MainInfo from './components/main-info/main-info.component';

function App() {
  const techs = ['react', 'redux', '...', '...', '...', '...', '...'];
  const projects = [
    {
      name: 'Sample Project',
      screenshot: 'project_liminal_screen.png',
      projectlink: 'http://project-liminal.herokuapp.com/',
      githublink: 'https://github.com/VinishkoSensei/Project_Liminal',
      logo: 'project_liminal.svg',
      techs: techs,
    },
    {
      name: 'Sample Project',
      screenshot: 'project_liminal_screen.png',
      projectlink: 'http://project-liminal.herokuapp.com/',
      githublink: 'https://github.com/VinishkoSensei/Project_Liminal',
      logo: 'project_liminal.svg',
      techs: [],
    },
    {
      name: 'Sample Project',
      screenshot: 'project_liminal_screen.png',
      projectlink: 'http://project-liminal.herokuapp.com/',
      githublink: 'https://github.com/VinishkoSensei/Project_Liminal',
      logo: 'project_liminal.svg',
      techs: [],
    },
    {
      name: 'Sample Project',
      screenshot: '',
      projectlink: '',
      githublink: '',
      logo: 'project_liminal.svg',
      techs: techs,
    },
  ];

  const getProjects = (projects) =>
    projects.map((project, index) => {
      const { screenshot, projectlink, githublink, logo, techs } = project;
      return screenshot && projectlink && logo ? (
        <div
          className="project"
          key={index}
          style={{ backgroundImage: `url('images/${screenshot}')` }}
        >
          <div className="project-overlay">
            <div className="project-overlay-up">
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
                <a href={githublink} target="_blank" rel="noreferrer nofollow">
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
              <div className="tech-info-container">
                {techs.map((tech, index) => (
                  <div className="tech-info" key={index}>
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null;
    });

  return (
    <div className="App">
      <div className="App-content">
        <div className="main">
          <MainInfo />
          <div className="separator">
            Projects filter: <i>All</i>
          </div>
          <div className="projects-container">{getProjects(projects)}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
