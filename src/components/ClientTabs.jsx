import ClientCard from "./ClientCard";
import ClientTabContent from "./ClientTabContent";
import { clientCards } from "../data/clientCards";
export default function ClientTabs() {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="clients-tabs-item">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            {clientCards.map((card) => {
              return (
                <ClientCard
                  id={card.id}
                  svgIcon={card.svg}
                  cardTitle={card.cardTitle}
                  style={card.style}
                  additions={card.additions}
                />
              );
            })}
          </ul>
          <ClientTabContent />
        </div>
      </div>
    </div>
  );
}
