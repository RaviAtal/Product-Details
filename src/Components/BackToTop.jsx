import React, { useState } from "react";
import { Container } from "react-bootstrap";

const BackToTop = () => {
  const [first, setfirst] = useState(true);
  const onTop = () => {
    document.documentElement.scrollTop = 0;
  };
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 100) {
      setfirst(false);
    } else {
      setfirst(true);
    }
  });
  return (
    <>
      <section>
        <Container>
          <div className="z-index-5">
            <p
              onClick={() => onTop()}
              className={
                first ? "d-none backtotop_btn" : "d-block backtotop_btn"
              }
            >
              Top
            </p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default BackToTop;
