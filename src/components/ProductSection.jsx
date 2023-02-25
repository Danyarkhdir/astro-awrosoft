import ProductDesc from "./ProductDesc";
import Products from "./Products";
export default function ProductSection() {
  return (
    <section className="infetech-offer-category-area">
      <h1 className="infetech-offer-category-title">
        <span>AWRO</span> PRODUCTS
      </h1>
      <div className="container">
        <div className="row ">
          <ProductDesc />
          <Products />
        </div>
      </div>
    </section>
  );
}
