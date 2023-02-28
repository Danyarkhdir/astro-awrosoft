export default function Footer() {
  return (
    <>
      <footer className="infetech-footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-about">
                <a href="#">
                  <img src="src/assets/images/logo.png" alt="" />
                </a>
                <p>
                  Founded in 2006, Awrosoft is an Erbil-headquartered provider
                  of custom software development and IT consulting services. We
                  provide comprehensive set of software solutions and products
                  coupled with a range of IT services.
                </p>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin "></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="footer-nav">
                <h4 className="title">Links</h4>
                <ul>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Meet our Team</a>
                  </li>
                  <li>
                    <a href="#">News & Media</a>
                  </li>
                  <li>
                    <a href="#">Our Projects</a>
                  </li>
                  <li>
                    <a href="#">Contacts</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="footer-newsletter">
                <h4 className="title">Newsletter</h4>
                <p>
                  Signup for our latest news & articles. We won’t give you spam
                  mails.
                </p>
                <form action="#">
                  <div className="input-box">
                    <input type="text" placeholder="Email Address" />
                    <button>
                      <i className="far fa-paper-plane"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-info">
                <h4 className="title">Contact</h4>
                <ul>
                  <li>
                    <i className="fas fa-phone"></i>
                    <span>+ 88 ( 9800 ) 6802</span>
                  </li>
                  <li>
                    <i className="fas fa-envelope"></i>
                    <span>needhelp@company.com</span>
                  </li>
                  <li>
                    <i className="fas fa-map-marker"></i>
                    <span>
                      Empire World,
                      <br /> Business Towers T4,
                      <br /> Floor 13,
                      <br /> No. 1 <br /> Erbil, Iraq
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-copyright text-center">
        <p>
          © Copyright 2006 - 2021
          <a href="https://awrosoft.krd/"> Awrosoft </a>| All Rights Reserved. |
          Privacy Policy
        </p>
      </div>
    </>
  );
}
