import React, { useState } from "react";
import shoe from "../assets/images/png/red_shoes_hearo.png";
import black_shoe_hero from "../assets/images/png/black_shoe_hero.png";
import gray_shoe_hero from "../assets/images/png/gray_shoe_hero.png";
import red_black_shoe_hero from "../assets/images/png/red_black_shoe_hero.png";
import stars_5 from "../assets/images/png/stars_5.png";
import Compare from "../assets/images/png/Compare.png";
import Wishlist from "../assets/images/png/Wishlist.png";
import share from "../assets/images/png/share.png";
import fb from "../assets/images/png/fb.png";
import twit from "../assets/images/png/twit.png";
import pinterest from "../assets/images/png/pinterest.png";
import G from "../assets/images/png/G.png";

function Header() {
  const [inc, setInc] = useState(1);
  const [Change, setChange] = useState(2);
  let setOne = () => {
    if (inc == 1) {
      setInc(1);
    } else {
      setInc(inc - 1);
    }
  };
  return (
    <>
      <section>
        <div className="container py-4 py-lg-5">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <div className="h-100">
                <img
                  className={Change == 1 ? "d-flex w-100" : "d-none"}
                  src={black_shoe_hero}
                  alt="black_shoe_hero"
                />
                <img
                  className={Change == 2 ? "d-flex w-100" : "d-none"}
                  src={shoe}
                  alt="shoe"
                />
                <img
                  className={Change == 3 ? "d-flex w-100" : "d-none"}
                  src={gray_shoe_hero}
                  alt="gray_shoe_hero"
                />
                <img
                  className={Change == 4 ? "d-flex w-100" : "d-none"}
                  src={red_black_shoe_hero}
                  alt="red_black_shoe_hero"
                />
                <div className="row mt-4">
                  <div className="col-3">
                    <div>
                      <img
                        onClick={() => setChange(1)}
                        className="w-100 pointer"
                        src={black_shoe_hero}
                        alt="black_shoe_hero"
                      />
                    </div>
                  </div>
                  <div className="col-3">
                    <div>
                      <img
                        onClick={() => setChange(2)}
                        className="w-100 pointer"
                        src={shoe}
                        alt="shoe"
                      />
                    </div>
                  </div>
                  <div className="col-3">
                    <div>
                      <img
                        onClick={() => setChange(3)}
                        className="w-100 pointer"
                        src={gray_shoe_hero}
                        alt="gray_shoe_hero"
                      />
                    </div>
                  </div>
                  <div className="col-3">
                    <div>
                      <img
                        onClick={() => setChange(4)}
                        className="w-100 pointer"
                        src={red_black_shoe_hero}
                        alt="red_black_shoe_hero"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ms-4">
                <h1 className=" ff_poppins fw-semibold fs_xl text-black m-0">
                  PREMIUM MENS SPORTS LATHER KEDS
                </h1>
                <div className="d-flex mt-3 align-items-center">
                  <img src={stars_5} alt="stars_5" />
                  <p className="m-0 ms-2 ff_poppins fw-normal fs_md text_gray">
                    ( 5 Customer Review )
                  </p>
                </div>
                <p className="m-0 mt-4 ff_poppins fw-normal fs_md opacity-75">
                  Sed nec ultricies felis, vitae facilisis ipsum. Morbi id
                  turpis euismod, rhoncus tortor quis, lobortis sapien. Sed
                  imperdiet nulla in leo ullamcorper, in finibus elit porta. Sed
                  eget congue neque, mattis finibus neque. In vel dolor ac augue
                  pretium
                </p>
                <div className="mt-lg-5 pt-4 d-flex gap-3 align-items-center">
                  <p className="m-0 ff_poppins fw_500">Qty: </p>
                  <div className="border_qty d-flex gap-3 align-items-center">
                    <button
                      onClick={setOne}
                      className="btn m-0 ff_josefin fw-normal fs_md border-0"
                    >
                      -
                    </button>
                    <p className="m-0 ff_josefin fw-normal fs_md">{inc}</p>
                    <button
                      onClick={() => setInc(inc + 1)}
                      className="btn m-0 ff_josefin fw-normal fs_md border-0"
                    >
                      +
                    </button>
                  </div>
                  <button className="btn ff_poppins fw_500 fs_md Add_to_Cart px-4 text-white">
                    Add to Cart
                  </button>
                </div>
                <div className="mt-4 d-flex gap-3 align-items-center">
                  <p className="m-0 ff_poppins fw_500">Size : </p>
                  <select name="Size" className="border_qty arrow px-4">
                    <option value="S">S</option>
                    <option value="Sm">Sm</option>
                    <option value="Md">Md</option>
                    <option value="lg">lg</option>
                  </select>
                </div>
                <div className="mt-4 d-flex gap-2 align-items-center">
                  <p className="m-0 ff_poppins fw_500">Color : </p>
                  <div className="clr_border pointer">
                    <div className="bg_red"></div>
                  </div>
                  <div className="clr_border pointer">
                    <div className="bg_green"></div>
                  </div>
                  <div className="clr_border pointer">
                    <div className="bg_blackk"></div>
                  </div>
                  <div className="clr_border pointer">
                    <div className="bg_gryy"></div>
                  </div>
                </div>
                <div className="mt-4 d-flex align-items-center gap-5">
                  <div className="d-flex align-items-center gap-2 pointer">
                    <img src={Compare} alt="Compare" />
                    <p className="m-0 ff_poppins fs_xsm fw-light">Compare</p>
                  </div>
                  <div className="d-flex align-items-center gap-2 pointer">
                    <img src={Wishlist} alt="Wishlist" />
                    <p className="m-0 ff_poppins fs_xsm fw-light">Wishlist</p>
                  </div>
                </div>
                <hr className=" w-75 mt-4" />
                <div className="d-flex align-items-center gap-4">
                  <a href="/">
                    <img src={share} alt="share" />
                  </a>
                  <a href="/">
                    <img src={fb} alt="fb" />
                  </a>
                  <a href="/">
                    <img src={twit} alt="twit" />
                  </a>
                  <a href="/">
                    <img src={pinterest} alt="pinterest" />
                  </a>
                  <a href="/">
                    <img src={G} alt="G" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
