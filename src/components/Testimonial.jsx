export default function Testimonial() {
  const items = [
    {
      imgUrl: "src/assets/images/tm2.png",
      sectionTitle: "KSTP",
      subTitle: "Kurdistan Science & Technology Park",
      description: (
        <p>
          ICT is a particularly important technology for any country. We decided
          to establish an ICT company in 2006, for the purpose of developing
          custom software and products. Next step is to extend the services of
          the Company and turn it to ICT Research and Development Center. The
          first ICT Research and Development Center in Kurdistan cab be the base
          of the Science and Technology Park and then it will grow by other
          companies, businesses and governmental organizations joining to it
          yelding in establishing Kurdistan Science & Technologhy Park.
        </p>
      ),
    },
    {
      imgUrl: "src/assets/images/tm3.png",
      sectionTitle: "Gohdar J. Ibrahim",
      subTitle: "CEO - Awrosoft",
      description: (
        <p>
          When I was studying in university in 2001, I was always asking myself
          why some countries have highly developed economy and advanced
          technological infrastructure and some do not. We all know the
          Kurdistan Region (KR) has the potential to achieve accelerated
          economic development and growth. Then I knew that ebconomic
          development is not possible in the absence of a well-concerted
          research system as a fundamental infrastructure. The answer to my
          question was STP (Science and Technology Park). STPs are economic and
          technological development complexes that aim at fostering
          knowledge-based economies by bringing together scientific research,
          business and governmental organizations in one physical location, and
          supporting interrelationships between these groups. We are working on
          this.
        </p>
      ),
    },
    // {
    //   imgUrl: "src/assets/images/tm1.png",
    //   sectionTitle: "Why Awrosoft",
    //   subTitle: "Some facts",
    //   description: (
    //     <p>
    //       Awrosoft has many success stories in differemt industries and domains.
    //       We have served over 300 customers in different industries and
    //       organizations. We have several products including ERP, DMS, IUMS,
    //       Archive, CMS,... Awrosoft expand products and services over time.
    //     </p>
    //   ),
    // },
    // {
    //   imgUrl: "src/assets/images/tm1.png",
    //   sectionTitle: "Why Awrosoft",
    //   subTitle: "Potential outcomes",
    //   description: (
    //     <p>
    //       Awrosoft provides a stable and long term partner for its customers. We
    //       are able to expand and grow as our customers grow. We are able to
    //       serve our customers timely & efficiently regardless of their physical
    //       location, We leverage lessons learned and leading practices from our
    //       previous experiences to help our customers accelerate their value
    //       realization. We Provide cutting edge technology and prepare our
    //       customers for future needs. We are able to form sustainable strategic
    //       alliance partnerships.
    //     </p>
    //   ),
    // },
  ];
  return (
    <section className="infetech-testimonial-4-area pt-80 pb-80">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-1">
            <div className="testimonial-4-box">
              <div className="testimonial-small-thumb">
                <ul className="testimonial-thumb-list">
                  {items.map((item) => {
                    return (
                      <li>
                        <img src="" alt="" />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-11">
            <div className="testimonial-slider-active-4">
              {items.map((item) => {
                return (
                  <div className="slide-item">
                    <div className="row">
                      <div className="col-lg-5">
                        <div className="testimonial-thumb-4 testimonial-profiles">
                          <img src={item.imgUrl} alt="" />
                        </div>
                      </div>
                      <div className="col-lg-7">
                        <div className="testimonial-content-4">
                          <div className="section-title">
                            <h3 className="title">{item.sectionTitle}</h3>
                            <div className="clients-info">
                              <h4 className="title">{item.subTitle}</h4>
                            </div>
                            {item.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
