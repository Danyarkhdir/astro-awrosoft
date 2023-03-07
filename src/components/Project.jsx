export default function Project({ image, name, info, link }) {
  return (
    <div class="col-lg-4 col-md-6">
      <div class="single-project-item">
        <img class="project-image" src={image} alt="" />
        <div class="single-project-overlay">
          <h4 class="title">{name}</h4>

          <span>{info}</span>
          <div>
            <a href="">
              <i class="fa fa-info" aria-hidden="true"></i>
            </a>
            {link && (
              <a href={link}>
                <i class="fal fa-long-arrow-right"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
