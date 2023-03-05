import ServiceCard from "./ServiceCard";
import ServicesDesc from "./ServicesDesc";
import { serviceCards } from "../data/serviceCards";
export default function ServiceTabs() {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="clients-tabs-item">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            {serviceCards.map((card) => {
              return (
                <ServiceCard
                  id={card.cardTitle}
                  svgIcon={card.icon}
                  cardTitle={card.cardTitle}
                  style={card.style}
                  additions={card.additions}
                />
              );
            })}
          </ul>
          <ServicesDesc />
        </div>
      </div>
    </div>
  );
}
