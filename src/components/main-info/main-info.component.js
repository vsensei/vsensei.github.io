import './main-info.styles.scss';

const MainInfo = () => {
  return (
    <div className="maininfo">
      <div className="about">
        <div className="avatar">
          <img src="images/avatar.jpg" alt="avatar" />
        </div>
        <div className="my-info">
          <span>VSensei</span>
          <span>
            <i>@vinishkosensei</i>
          </span>
          <span>Sample Text</span>
        </div>
      </div>
      <div className="tech-info-container">
        <div className="tech-info">react</div>
        <div className="tech-info">redux</div>
        <div className="tech-info">...</div>
        <div className="tech-info">...</div>
        <div className="tech-info">...</div>
        <div className="tech-info">...</div>
        <div className="tech-info">...</div>
        <div className="tech-info">...</div>
      </div>
    </div>
  );
};

export default MainInfo;
