import logo from "@assets/images/logo.png";
import phoneWhite2 from "@assets/images/icon/phone-white-2.svg";
export default function Menu() {
  return (
    <header className="infetech-header-area-2 infetech-header-area-3">
      {/* <div className="top-line"></div> */}
      <div className="header-main-nav-layout-2 header-sticky">
        <div className="row align-items-center">
          <div className="col-md-3">
            <div className="logo-white">
              <a href="index-2.html">
                <img src={logo} alt="" />
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="header-main-nav-box">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a href="#">Pages</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="our-team.html">Our Team</a>
                    </li>
                    <li>
                      <a href="team-details.html">Team Details</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Services</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="service-1.html">Service 1</a>
                    </li>
                    <li>
                      <a href="service-2.html">Service 2</a>
                    </li>
                    <li>
                      <a href="service-3.html">Service 3</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Projects</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="projects.html">Projects</a>
                    </li>
                    <li>
                      <a href="projects-details.html">Project Details</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Blog</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="blog-details.html">Blog Details</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="header-main-info">
              <div className="header-mini-btn">
                <ul>
                  {/* <li>
                    <a className="search-box-btn" href="#">
                      <i className="fal fa-search"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fal fa-shopping-cart"></i>
                    </a>
                  </li> */}
                  <li>
                    <a className="toggle-bar canvas_open" href="#">
                      <i className="fal fa-bars"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="header-main-info-contact">
                <div className="icon">
                  <img src={phoneWhite2} alt="" />
                </div>
                <div className="content">
                  <span>Call Anytime</span>
                  <a href="tel:+8898006802">+ 88 ( 9800 ) 6802</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
