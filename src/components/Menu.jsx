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
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a href="#">Pages</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="/awro-works">Projects</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
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
                  <a href="tel:+9647508233223">+964 (0) 750 8233223</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
