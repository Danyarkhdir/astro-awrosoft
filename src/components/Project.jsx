export default function Project({ image, name, dataFilter, info, link }) {
  return (
    <div
      className="col-lg-4 col-md-6 awro-project"
      data-filter="awro-project"
      filter={dataFilter}
    >
      <div className="single-project-item">
        <img className="project-image" src={image} alt="" />
        <div className="single-project-overlay">
          <h4 className="title">{name}</h4>

          <span>{info}</span>
          <div>
            <a href="">
              <i className="fa fa-info" aria-hidden="true"></i>
            </a>
            {link && (
              <a target="_blank" href={link}>
                <i className="fal fa-long-arrow-right"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
