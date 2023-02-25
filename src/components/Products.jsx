export default function Products() {
  const products = [
    {
      id: "prdct-one-tab",
      icon: (
        <img
          src="src/assets/images/services/consultation.png"
          height="60px"
          width="60px"
        />
      ),
      cardTitle: "Software Consulting",
      style: "",
      additions: {
        dataBsTarget: "#prdct-one",
        ariaControls: "prdct-one",
        ariaSelected: "true",
      },
    },
  ];

  return (
    <div
      className="col-lg-6 animated wow fadeInRight"
      data-wow-duration="1500ms"
      data-wow-delay="300ms"
    >
      <div className="offer-category-item">
        <div className="row">
          <div className="col-lg-6">
            <div className="box">
              <a
                className="active"
                href="#prdct-one"
                data-prdct="awro-products"
                data-toggle="prdct-one"
              >
                {products[0].icon} Website
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="box">
              <a
                href="#prdct-two"
                data-prdct="awro-products"
                data-toggle="prdct-two"
              >
                {products[0].icon} Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
