export default function ProductDesc() {
  const productDesc = [
    {
      id: "prdct-one",
      ariaLabelledby: "prdct-one-tab",
      tabTitle: "Software Consulting",
      tabContent:
        "With deep experience in software engineering, we provide a wide range of consulting services undertaking a comprehensive analysis of your existing system, mapping out your plan on the introduction of new components, and guiding you in the complex software world.",
    },
  ];
  return (
    <div
      className="col-lg-6 animated wow fadeInLeft"
      data-wow-duration="1500ms"
      data-wow-delay="0ms"
      role="presentation"
    >
      <div
        className="product active animated wow fadeInLeft"
        id="prdct-one"
        data-prdct-description="prdct-description"
        data-toggle="prdct-one"
        data-wow-duration="1500ms"
        data-wow-delay="0ms"
        role="presentation"
      >
        <div className="section-title">
          <h3 className="title">HevraERP</h3>
        </div>
        <div className="offer-content">
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
          <a className="main-btn" href="#">
            Learn More
          </a>
        </div>
      </div>
      <div
        className="product animated wow fadeInLeft"
        id="prdct-two"
        data-prdct-description="prdct-description"
        data-toggle="prdct-two"
        data-wow-duration="1500ms"
        data-wow-delay="0ms"
        role="presentation"
      >
        <div className="section-title">
          <h3 className="title">Danyar</h3>
        </div>
        <div className="offer-content">
          <p>Hi my name is danyar and i'm from afghanistan</p>
          <a className="main-btn" href="#">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}
