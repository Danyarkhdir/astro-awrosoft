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
                    </li>
                    <li className="menu-item-has-children active">
                      <a href="about.html">About</a>
                    </li>
                    <li className="menu-item-has-children active">
                      <a href="#">Pages</a>
                    </li>
                    <li className="menu-item-has-children active">
                      <a href="#">Services</a>
                    </li>
                    <li className="menu-item-has-children active">
                      <a href="#">Projects</a>
                    </li>
                    <li className="menu-item-has-children active">
                      <a href="#">Blog</a>
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
