import './main-info.styles.scss';
import technologies from '../../information/technologies';
import TechInfo from '../tech-info/tech-info.component';

const MainInfo = ({
  allFilters,
  setAllFilters,
  filteredTechnologies,
  setFilteredTechnologies,
  githubProfile,
}) => {
  const filterTechnologies = (tech) => () => {
    setFilteredTechnologies({
      ...filteredTechnologies,
      [tech]: !filteredTechnologies[tech],
    });
    setAllFilters(false);
  };
  const clearTechnologiesFilter = () => {
    setFilteredTechnologies(
      Object.fromEntries(technologies.map((tech) => [[tech], false]))
    );
    setAllFilters((oldAllFilters) => !oldAllFilters);
  };

  return (
    <div className="maininfo">
      <div className="about">
        <div className="avatar">
          <a href={githubProfile} target="_blank" rel="noreferrer nofollow">
            <img src="images/avatar.jpg" alt="avatar" />
          </a>
        </div>
        <div className="my-info">
          <span>VSensei</span>
          <span>
            <i>@vinishkosensei</i>
          </span>
          <span>Sample Text</span>
        </div>
      </div>
      <TechInfo
        filteredTechnologies={filteredTechnologies}
        allFilters={allFilters}
        clearTechnologiesFilter={clearTechnologiesFilter}
        filterTechnologies={filterTechnologies}
      />
    </div>
  );
};

export default MainInfo;
