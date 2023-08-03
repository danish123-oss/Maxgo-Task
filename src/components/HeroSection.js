import React from "react";
export default function HeroSection() {
  return (
    <div className="hero_area">
      <header className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container">
            <a className="navbar-brand" href="index.html">
              <img src="images/logo.png" alt="" />
            </a>
            <div className="navbar-collapse" id="">
              <ul className="navbar-nav justify-content-between">
                <div className="User_option">
                  <li className="">
                    <a className="mr-4" href="/">
                      {" "}
                      Login{" "}
                    </a>
                    <a className="" href="/">
                      {" "}
                      Sign up{" "}
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <section className="slider_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 offset-md-1">
              <div className="detail-box">
                <h1>
                  <span> Modern</span> <br />
                  Apartment <br />
                  House
                </h1>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of
                </p>
                <div className="btn-box">
                  <a href="/" className="">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
