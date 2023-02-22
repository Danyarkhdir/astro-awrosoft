export default function ClientTabContent() {
  const tabsContent = [
    {
      id: "pills-one",
      ariaLabelledby: "pills-one-tab",
      tabTitle: "Software Consulting",
      tabContent:
        "With deep experience in software engineering, we provide a wide range of consulting services undertaking a comprehensive analysis of your existing system, mapping out your plan on the introduction of new components, and guiding you in the complex software world.",
    },
    {
      id: "pills-tow",
      ariaLabelledby: "pills-tow-tab",
      tabTitle: "Costum Software Development",
      tabContent:
        "Awrosoft offers a full range of custom software development services for a wide variety of verticals and business domains. Whether you are a start-up or an established business, we will be happy to assist you at any and every stage of the software development life cycle: from conceptualization, business analysis and prototyping to the development and deployment of a complete solution.",
    },
    {
      id: "pills-three",
      ariaLabelledby: "pills-three-tab",
      tabTitle: "Mobile App Development",
      tabContent:
        "Awrosoft talent pool of mobile app developers includes highly-skilled analysts, UX experts and certified software engineers who are well-versed in building apps for all the major platforms whether it's iOS, Android, or Windows Phone. Apps can be developed natively, or by using cross-platform frameworks and platforms such as PhoneGap or Xamarin.",
    },
    {
      id: "pills-four",
      ariaLabelledby: "pills-four-tab",
      tabTitle: "Web App Development",
      tabContent:
        "Awrosoft is a web development company with over a decade of experience in building web applications. Our dedicated web app developers have successfully completed several projects for a variety of industries and business domains.",
    },
    {
      id: "pills-five",
      ariaLabelledby: "pills-five-tab",
      tabTitle: "Biometric Development",
      tabContent:
        "We are a trusted partner of Dermalog and Neurotechnology companies for biometric technologies for identity management. With Neurotechnology Automated Biometric Identification Systems (ABIS), we empower all types of organizations around the world to integrate or build powerful and flexible biometric large-scale identification solutions quickly and easily. With extensive experience, agile team of biometric and software professionals, we focus on delivering accuracy, speed, and quality to solutions.",
    },
    {
      id: "pills-six",
      ariaLabelledby: "pills-six-tab",
      tabTitle: "Software Testing and QA",
      tabContent:
        "Our team makes sure your software solutions fully meet your needs and expectations. Combining well-developed QA processes with modern tools and methodologies, we complete the most challenging projects within time and budget.",
    },
    {
      id: "pills-seven",
      ariaLabelledby: "pills-seven-tab",
      tabTitle: "Software Development Outsourcing",
      tabContent:
        "Since 2014, Awrosoft has offered outsourced software development to help improve innovation process for diverse businesses: Many organizations consider us a reliable software outsourcing company and have become our regular customers, giving Awrosoft an incredible impetus to grow in competences and size.",
    },
    {
      id: "pills-eight",
      ariaLabelledby: "pills-eight-tab",
      tabTitle: "Additional Services",
      tabContent:
        "To complete our product suite and expand our relationship with customers, we offer additional services which enable our clients to receive the best result from their investment. The additional services include Implementation, Education & Training and After Sales Services.",
    },
  ];
  return (
    <div className="tab-content" id="pills-tabContent">
      {tabsContent.map((tab, index) => {
        return (
          <div
            className={`tab-pane fade ${index === 2 ? "show active" : ""}`}
            id={tab.id}
            role="tabpanel"
            aria-labelledby={tab.ariaLabelledby}
          >
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div
                  className="clients-content-box text-center animated wow fadeInUp"
                  data-wow-duration="2000ms"
                  data-wow-delay="0ms"
                >
                  <h4 className="title">{tab.tabTitle}</h4>
                  <p>{tab.tabContent}</p>
                  <a className="main-btn" href="#">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
