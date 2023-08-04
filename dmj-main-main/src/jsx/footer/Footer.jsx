import React from "react";
import logo from "../../assets/images/dmj.png";
import { NavLink } from "react-router-dom";

export default class Footer extends React.Component {
  render() {
    return (
      <>
        <div className="whatsapp-icon">
          <NavLink to="/" title="">
            <i className="bi bi-whatsapp wp-icon-color"></i>
          </NavLink>
        </div>

        <div className="footer-bg mt-1">
          <div className="container">
            <footer className="">
              <div className="row">
                <div className="col-md-3 mt-3">
                  <img
                    src={logo}
                    alt="Logo"
                    className="img-fluid footer-logo"
                  />

                  <p className="footer-para mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem ea molestias nemo nam
                  </p>
                </div>
                <FooterItem
                  head=" Useful Links"
                  item1=" Jewellery"
                  item2=" Handi crafts"
                  item3=" Heritage"
                  item4=" Apparels"
                  item5=" Blue Pottery"
                />
                <FooterItem
                  head=" Information"
                  item1=" Payment Option"
                  item2=" Refund & Returns"
                  item3=" Terms & Conditions"
                  item4=" Privacy Policy"
                  item5=" Contact Us"
                />
                <FooterItem
                  head=" Section"
                  item1="  About DMJ"
                  item2=" Blog"
                  item3=" FAQ"
                  item4=" Track Your Order"
                  item5=" Help"
                />
              </div>

              <div className="d-flex justify-content-between py-4 my-4 border-top footerText">
                <p className="footer-para">
                  &copy; 2021 Company, Inc. All rights reserved.
                </p>

                <ul className="list-unstyled d-flex">
                  <li className="ms-3">
                    <NavLink
                      className="link-dark"
                      to="https://www.facebook.com/diwamjewels"
                    >
                      <i className="bi bi-facebook fs-5 footer-icbx"></i>
                    </NavLink>
                  </li>
                  <li className="ms-3">
                    <NavLink
                      className="link-dark"
                      to="https://www.youtube.com/@diwamjewelsvlog"
                    >
                      <i className="bi bi-youtube fs-5 footer-icbx"></i>
                    </NavLink>
                  </li>
                  <li className="ms-3">
                    <NavLink
                      className="link-dark"
                      to="https://www.instagram.com/diwamjewels/"
                    >
                      <i className="bi bi-instagram fs-5 footer-icbx"></i>
                    </NavLink>
                  </li>
                  <li className="ms-3">
                    <NavLink
                      className="link-dark"
                      to="https://twitter.com/DiwamJewels"
                    >
                      <i className="bi bi-twitter fs-5 footer-icbx"></i>
                    </NavLink>
                  </li>
                  <li className="ms-3">
                    <NavLink
                      className="link-dark"
                      to="https://www.pinterest.ca/diwamjewels/"
                    >
                      <i className="bi bi-pinterest fs-5 footer-icbx"></i>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </footer>
          </div>
        </div>
      </>
    );
  }
}

class FooterItem extends React.Component {
  render() {
    const { head, item1, item2, item3, item4, item5 } = this.props;
    return (
      <>
        <div className="col-md-3 mt-3">
          <h5 className="text-white">
            <b>{head}</b>
          </h5>

          <p className="headline"></p>

          <ul className="nav flex-column mt-4">
            <li className="nav-item mb-2">
              <NavLink className="nav-link p-0 footer-text">
                {/* <i className="bi bi-arrow-right">{item1}</i> */}
                {item1}
              </NavLink>
            </li>

            <li className="nav-item mb-2">
              <NavLink className="nav-link p-0 footer-text">
                {/* <i className="bi bi-arrow-right">{item2}</i> */}
                {item2}
              </NavLink>
            </li>

            <li className="nav-item mb-2">
              <NavLink className="nav-link p-0 footer-text">
                {/* <i className="bi bi-arrow-right">{item3}</i> */}
                {item3}
              </NavLink>
            </li>

            <li className="nav-item mb-2">
              <NavLink className="nav-link p-0 footer-text">
                {/* <i className="bi bi-arrow-right">{item4}</i> */}
                {item4}
              </NavLink>
            </li>

            <li className="nav-item mb-2">
              <NavLink className="nav-link p-0 footer-text">
                {/* <i className="bi bi-arrow-right">{item5}</i> */}
                {item5}
              </NavLink>
            </li>
          </ul>
        </div>
      </>
    );
  }
}


