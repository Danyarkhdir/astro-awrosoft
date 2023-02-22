import ServiceTabs from "./ServiceTabs";
export default function Services({ titleLabel, title }) {
  return (
    <section className="infetech-clients-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-55">
              <span>{titleLabel}</span>
              <h3 className="title">{title}</h3>
            </div>
          </div>
        </div>
      </div>
      <ServiceTabs />
    </section>
  );
}
