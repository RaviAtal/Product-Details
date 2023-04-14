import React from "react";
import logo from "../assets/images/png/footere_logo.png";
import fb from "../assets/images/png/fb_footer.png";
import twit from "../assets/images/png/twit_footer.png";
import g from "../assets/images/png/g+_footer.svg";
import { Col, Row } from "react-bootstrap";

function Footere() {
  return (
    <>
      <section className=" bg_black_01 py-4">
        <div className="container">
          <img className="" src={logo} alt="logo" />
          <Row className=" justify-content-between ">
            <Col sm={12} md={12} lg={4}>
              <div>
                <p className="m-0 text-white opacity-75 ff_poppins fw-normal fs_xsm hover_opc">
                  Sed nec ultricies felis, vitae facilisis ipsum. Morbi id
                  turpis euismod, rhoncus tortor quis, lobortis sapien. Sed
                  imperdiet nulla in leo ullamcorper, in finibus elit porta.
                </p>
                <div className="d-flex gap-3 mt-4 align-items-center">
                  <a href="/">
                    <img src={fb} alt="fb" />
                  </a>
                  <a href="/">
                    <img src={twit} alt="twit" />
                  </a>
                  <a href="/">
                    <img src={g} alt="g" />
                  </a>
                </div>
              </div>
            </Col>
            <Col xs={6} md={6} lg={2} className="mt-4 mt-lg-0 ps-lg-5">
              <ul className="m-0 p-0">
                <li className="mb-4">
                  <a
                    href="/"
                    className="m-0 ff_poppins text-white fw-semibold fs_sm"
                  >
                    CUSTOM LINKS
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="/"
                    className="m-0 ff_poppins text-white fw-normal fs_sm opacity-75 hover_opc"
                  >
                    Lorem ipsum
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="/"
                    className="m-0 ff_poppins text-white fw-normal fs_sm opacity-75 hover_opc"
                  >
                    Lorem ipsum
                  </a>
                </li>
              </ul>
            </Col>
            <Col xs={6} md={6} lg={2} className="mt-4 mt-lg-0 ps-lg-4">
              <ul className="m-0 p-0">
                <li className="mb-4">
                  <a
                    href="/"
                    className="m-0 ff_poppins text-white fw-semibold fs_sm"
                  >
                    PRODUCTS
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="/"
                    className="m-0 ff_poppins text-white fw-normal fs_sm opacity-75 hover_opc"
                  >
                    Lorem ipsum
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="/"
                    className="m-0 ff_poppins text-white fw-normal fs_sm opacity-75 hover_opc"
                  >
                    Lorem ipsum
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="/"
                    className="m-0 ff_poppins text-white fw-normal fs_sm opacity-75 hover_opc"
                  >
                    Lorem ipsum
                  </a>
                </li>
              </ul>
            </Col>
            <Col xs={6} md={6} lg={2} className="mt-4 mt-lg-0">
              <ul className="m-0 p-0">
                <li className="mb-4">
                  <a
                    href="/"
                    className="m-0 ff_poppins text-white fw-semibold fs_sm"
                  >
                    OUR COMPANY
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="/"
                    className="m-0 ff_poppins text-white fw-normal fs_sm opacity-75 hover_opc"
                  >
                    Lorem ipsum
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="/"
                    className="m-0 ff_poppins text-white fw-normal fs_sm opacity-75 hover_opc"
                  >
                    Lorem ipsum
                  </a>
                </li>
              </ul>
            </Col>
            <Col xs={6} md={6} lg={2} className="mt-4 mt-lg-0">
              <ul className="m-0 p-0">
                <li className="mb-4">
                  <a
                    href="/"
                    className="m-0 ff_poppins text-white fw-semibold fs_sm"
                  >
                    YOUR ACCOUNT
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="/"
                    className="m-0 ff_poppins text-white fw-normal fs_sm opacity-75 hover_opc"
                  >
                    Lorem ipsum
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="/"
                    className="m-0 ff_poppins text-white fw-normal fs_sm opacity-75 hover_opc"
                  >
                    Lorem ipsum
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </section>
      <section className="bg_black_02 py-3">
        <p className="m-0 ff_poppins fw-normal fs-sm text-white opacity-75 text-center">
          © Copyright SNKRPLTS 2021.
        </p>
      </section>
    </>
  );
}

export default Footere;
