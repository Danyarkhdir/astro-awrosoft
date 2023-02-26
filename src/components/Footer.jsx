export default function Footer() {
  return (
    <>
      <footer class="infetech-footer-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="footer-about">
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
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-linkedin "></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-2 col-md-6">
              <div class="footer-nav">
                <h4 class="title">Links</h4>
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
            <div class="col-lg-4 col-md-6">
              <div class="footer-newsletter">
                <h4 class="title">Newsletter</h4>
                <p>
                  Signup for our latest news & articles. We won’t give you spam
                  mails.
                </p>
                <form action="#">
                  <div class="input-box">
                    <input type="text" placeholder="Email Address" />
                    <button>
                      <i class="far fa-paper-plane"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="footer-info">
                <h4 class="title">Contact</h4>
                <ul>
                  <li>
                    <i class="fas fa-phone"></i>
                    <span>+ 88 ( 9800 ) 6802</span>
                  </li>
                  <li>
                    <i class="fas fa-envelope"></i>
                    <span>needhelp@company.com</span>
                  </li>
                  <li>
                    <i class="fas fa-map-marker"></i>
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
      <div class="footer-copyright text-center">
        <p>
          © Copyright 2006 - 2021
          <a href="https://awrosoft.krd/"> Awrosoft </a>| All Rights Reserved. |
          Privacy Policy
        </p>
      </div>
    </>
  );
}