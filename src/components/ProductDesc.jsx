import { products } from "../data/products";
export default function ProductDesc({ productsDesc }) {
  return (
    <div
      className="col-lg-6 animated wow fadeInRight"
      data-wow-duration="1500ms"
      data-wow-delay="0ms"
      role="presentation"
      id="product-desc"
    >
      {products.map((product, index) => {
        return (
          <div
            id={`desc-${index}`}
            className={`product ${
              index === 0 ? "active" : ""
            } animated  fadeInRight`}
            data-prdct-description="prdct-description"
            data-toggle={product.dataToggle}
            data-wow-duration="1500ms"
            data-wow-delay="0ms"
            role="presentation"
          >
            <div className="section-title">
              <h3 className="title">{product.title}</h3>
            </div>
            <div className="offer-content">
              {product.desc}
              {product.moreInfoLink && (
                <a className="main-btn" href={product.moreInfoLink}>
                  Learn More
                </a>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
