import ProductDesc from "./ProductDesc";
import Products from "./Products";
import { products } from "../data/products";
export default function ProductSection() {
  return (
    <section id="products" className="infetech-offer-category-area">
      <h1 className="infetech-offer-category-title">
        <span>AWRO</span> PRODUCTS
      </h1>
      <div className="container">
        <div className="row product-section">
          <Products productsInfo={products} />
          <ProductDesc productsDesc={products} />
        </div>
      </div>
    </section>
  );
}
