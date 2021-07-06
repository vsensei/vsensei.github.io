import './tech-info.styles.scss';

const TechInfo = ({
  technologies,
  filteredTechnologies,
  allFilters,
  clearTechnologiesFilter,
  filterTechnologies,
}) => {
  return (
    <div className="tech-info-container">
      {technologies ? (
        <>
          {technologies.map((tech, index) => (
            <div className="tech-info" key={index}>
              {tech}
            </div>
          ))}
        </>
      ) : (
        <>
          <div
            className={`tech-info hover${allFilters ? ' chosen' : ''}`}
            onClick={clearTechnologiesFilter}
          >
            All
          </div>
          {Object.keys(filteredTechnologies).map((tech, index) => {
            return (
              <div
                className={`tech-info hover${
                  filteredTechnologies[tech] ? ' chosen' : ''
                }`}
                key={index}
                onClick={filterTechnologies(tech)}
              >
                {tech}
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default TechInfo;
