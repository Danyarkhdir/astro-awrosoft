export default function OfferArea() {
  const offersDesc = [
    {
      desc: (
        <span>
          Awrosoft provides a stable and long term partner for our customers.
        </span>
      ),
    },
    {
      desc: <span>We are able to expand and grow as our customers grow.</span>,
    },
    {
      desc: (
        <span>
          We are able to serve our customers timely & efficiently regardless of
          their physical location.
        </span>
      ),
    },
    {
      desc: (
        <span>
          We apply lessons learned and best practices from previous experiences
          to help our customers realize value faster.
        </span>
      ),
    },
    {
      desc: (
        <span>
          {" "}
          We provide cutting-edge technology while also preparing our customers
          for future requirements.
        </span>
      ),
    },
    {
      desc: (
        <span>
          Awrosoft is capable of developing long-term strategic alliance
          partnerships.
        </span>
      ),
    },
  ];
  return (
    <section class="infetech-offer-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div
              class="section-title animated wow fadeInLeft"
              data-wow-duration="1500ms"
              data-wow-delay="0ms"
            >
              <h3 class="title">Why Awrosoft ?</h3>
            </div>
            <div
              class="row animated wow fadeInLeft"
              data-wow-duration="1500ms"
              data-wow-delay="0ms"
            >
              <div class="col-lg-6">
                <div class="offer-text">
                  <p>
                    Awrosoft has many success stories in differemt industries
                    and domains.We have served over 300 customers in different
                    industries and organizations. We have several products
                    including ERP, DMS, IUMS, Archive, CMS,... Awrosoft expand
                    products and services over time.
                  </p>
                  <img src="src/assets/images/tm1small.png" alt="" />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="offer-list">
                  <ul>
                    {offersDesc.map((offer) => (
                      <li>
                        <i class="fas fa-arrow-right"></i>
                        <span>{offer.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5">
            <div
              class="infetech-offer-thumb text-right animated wow fadeInRight"
              data-wow-duration="1500ms"
              data-wow-delay="300ms"
            >
              <img src="src/assets/images/offer-thumb.png" alt="" />
              {/* <div class="offer-icon">
                <img src="src/assets/images/icon/offer-icon.png" alt="" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
