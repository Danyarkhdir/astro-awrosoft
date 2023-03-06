export default function OffCanvasMenu(params) {
  return (
    <>
      <div className="off_canvars_overlay"></div>
      <div className="offcanvas_menu">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="offcanvas_menu_wrapper">
                <div className="canvas_close">
                  <a href="javascript:void(0)">
                    <i className="fa fa-times"></i>
                  </a>
                </div>
                <div className="offcanvas-social">
                  <ul className="text-center">
                    <li>
                      <a href="$">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="$">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="$">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="$">
                        <i className="fab fa-dribbble"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div id="menu" className="text-left">
                  <ul className="offcanvas_main_menu">
                    <li className="menu-item-has-children active">
                      <a href="#">Home</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="index.html">Home 1</a>
                        </li>
                        <li>
                          <a href="index-2.html">Home 2</a>
                        </li>
                        <li>
                          <a href="index-3.html">Home 3</a>
                        </li>
                        <li>
                          <a href="index-4.html">Home 4</a>
                        </li>
                        <li>
                          <a href="index-5.html">Home 5</a>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#">Header Versions</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="index.html">Header Style 1</a>
                            </li>
                            <li>
                              <a href="index-2.html">Header Style 2</a>
                            </li>
                            <li>
                              <a href="index-3.html">Header Style 3</a>
                            </li>
                            <li>
                              <a href="index-4.html">Header Style 4</a>
                            </li>
                            <li>
                              <a href="index-5.html">Header Style 5</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children active">
                      <a href="about.html">About</a>
                    </li>
                    <li className="menu-item-has-children active">
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
                    <li className="menu-item-has-children active">
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
                    <li className="menu-item-has-children active">
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
                    <li className="menu-item-has-children active">
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
                    <li className="menu-item-has-children active">
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </div>
                <div className="offcanvas_footer">
                  <span>
                    <a href="mailto:info@awrosoft.com">
                      <i className="fa fa-envelope-o"></i> info@awrosoft.com
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
