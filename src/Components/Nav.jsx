import React, { useState } from "react";
import logo_nav from "../assets/images/png/logo_nav.png";
import open_menu from "../assets/images/png/nav_open.png";
import logo_tag_line from "../assets/images/png/logo_tag_line.png";

function Nav() {
  const [showNav, setshowNav] = useState(false);
  if (showNav) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
  return (
    <>
      <nav>
        <div className=" container">
          <div className=" py-2 row flex-column flex-lg-row justify-content-between align-items-center">
            <div className="col-2 col-lg-1">
              <div className=" h-100">
                <a href="/">
                  <img className=" w-100" src={logo_nav} alt="logo_nav" />
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-lg-1">
              <div className=" h-100">
                <a href="/">
                  <img
                    className=" mt-2 mt-lg-0 w-100"
                    src={logo_tag_line}
                    alt="logo_tag_line"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border_nav">
          <div className=" container">
            <div className=" d-flex justify-content-end py-3 gap-4 d-none d-lg-flex">
              <li>
                <a
                  className=" ff_roboto fs_sm fw-normal text-black nav_text"
                  href="/"
                >
                  HOME
                </a>
              </li>
              <li>
                <a
                  className=" ff_roboto fs_sm fw-normal text-black nav_text"
                  href="/"
                >
                  SNEAKERS KOPEN
                </a>
              </li>
              <li>
                <a
                  className=" ff_roboto fs_sm fw-normal text-black nav_text"
                  href="/"
                >
                  INTERVIEWS
                </a>
              </li>
              <li>
                <a
                  className=" ff_roboto fs_sm fw-normal text-black nav_text"
                  href="/"
                >
                  SALE
                </a>
              </li>
              <li>
                <a
                  className=" ff_roboto fs_sm fw-normal text-black nav_text"
                  href="/"
                >
                  SNEAKER VAN DE DAG
                </a>
              </li>
              <li>
                <a
                  className=" ff_roboto fs_sm fw-normal text-black nav_text"
                  href="/"
                >
                  SNEAKER FORUM
                </a>
              </li>
              <li>
                <a
                  className=" ff_roboto fs_sm fw-normal text-black nav_text"
                  href="/"
                >
                  BLOG
                </a>
              </li>
            </div>
            <div className=" d-flex justify-content-end">
              <button
                onClick={() => setshowNav(true)}
                className=" d-lg-none btn"
              >
                <img className="" src={open_menu} alt="open_menu" />
              </button>
            </div>
            {/* nav_open */}
            <div className={showNav ? "show_nav" : "hide_nav"}>
              <div className="d-flex d-lg-none flex-column mb-5 align-items-center justify-content-center position-relative ">
                <div className=" position-absolute end-0 top-0">
                  <button
                    onClick={() => setshowNav(false)}
                    className="btn btn-danger btn-close p-3 rounded-5"
                  ></button>
                </div>
                <ul className="pt-5 ps-0">
                  <li className="mt-3">
                    <a
                      className=" ff_roboto fs_sm fw-normal text-black nav_text text-white"
                      href="/"
                    >
                      HOME
                    </a>
                  </li>
                  <li className="mt-3">
                    <a
                      className=" ff_roboto fs_sm fw-normal text-black nav_text text-white"
                      href="/"
                    >
                      SNEAKERS KOPEN
                    </a>
                  </li>
                  <li className="mt-3">
                    <a
                      className=" ff_roboto fs_sm fw-normal text-black nav_text text-white"
                      href="/"
                    >
                      INTERVIEWS
                    </a>
                  </li>
                  <li className="mt-3">
                    <a
                      className=" ff_roboto fs_sm fw-normal text-black nav_text text-white"
                      href="/"
                    >
                      SALE
                    </a>
                  </li>
                  <li className="mt-3">
                    <a
                      className=" ff_roboto fs_sm fw-normal text-black nav_text text-white"
                      href="/"
                    >
                      SNEAKER VAN DE DAG
                    </a>
                  </li>
                  <li className="mt-3">
                    <a
                      className=" ff_roboto fs_sm fw-normal text-black nav_text text-white"
                      href="/"
                    >
                      SNEAKER FORUM
                    </a>
                  </li>
                  <li className="mt-3">
                    <a
                      className=" ff_roboto fs_sm fw-normal text-black nav_text text-white"
                      href="/"
                    >
                      BLOG
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
