export default function Products({ productsInfo }) {
  return (
    <div
      className="col-lg-6 animated wow fadeInLeft"
      data-wow-duration="1500ms"
      data-wow-delay="300ms"
    >
      <div className="offer-category-item">
        <div className="row">
          {productsInfo.map((productInfos, index) => {
            return (
              <div id={`product-${index}`} className="col-lg-6">
                <div className="box">
                  <a
                    className={`${index === 0 ? "active" : ""}`}
                    data-prdct="awro-products"
                    data-toggle={productInfos.dataToggle}
                  >
                    <span>{productInfos.icon}</span> {productInfos.title}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
