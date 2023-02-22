export default function ClientTabContent() {
  const tabsContent = [
    {
      id: "pills-one",
      ariaLabelledby: "pills-one-tab",
      tabTitle: "Product Development",
      tabContent:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even. Vestibulum non sollicitudin diam. Sed malesuada dolor ac sem ipsum ullamcorper.",
    },
    {
      id: "pills-tow",
      ariaLabelledby: "pills-tow-tab",
      tabTitle: "Digital Marketing",
      tabContent:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even. Vestibulum non sollicitudin diam. Sed malesuada dolor ac sem ipsum ullamcorper.",
    },
    {
      id: "pills-three",
      ariaLabelledby: "pills-three-tab",
      tabTitle: "Security System",
      tabContent:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even. Vestibulum non sollicitudin diam. Sed malesuada dolor ac sem ipsum ullamcorper.",
    },
    {
      id: "pills-four",
      ariaLabelledby: "pills-four-tab",
      tabTitle: "UI/UX Designing",
      tabContent:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even. Vestibulum non sollicitudin diam. Sed malesuada dolor ac sem ipsum ullamcorper.",
    },
    {
      id: "pills-five",
      ariaLabelledby: "pills-five-tab",
      tabTitle: "Data Analysis",
      tabContent:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even. Vestibulum non sollicitudin diam. Sed malesuada dolor ac sem ipsum ullamcorper.",
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
