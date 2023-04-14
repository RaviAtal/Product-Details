import React, { useState } from "react";

function UseStateDesc() {
  const [Change, setChange] = useState(1);
  return (
    <>
      <section>
        <div className="container py-4 py-lg-5">
          <div className="d-flex gap-md-4 gap-lg-5">
            <button
              onClick={() => setChange(1)}
              className="btn border-0 ff_poppins fw-normal fs_md position-relative line_hover col_change p-0"
            >
              DESCRIPTION
            </button>
            <button
              onClick={() => setChange(2)}
              className="btn border-0 ff_poppins fw-normal fs_md position-relative line_hover col_change p-0"
            >
              ADDITIONAL INFORMATION
            </button>
            <button
              onClick={() => setChange(3)}
              className="btn border-0 ff_poppins fw-normal fs_md position-relative line_hover col_change p-0"
            >
              REVIEWS (1)
            </button>
          </div>
          <div className="mt-4">
            <p
              className={
                Change == 1
                  ? "m-0 ff_poppins  fw-normal fs_md opacity-75"
                  : "d-none"
              }
            >
              Sed nec ultricies felis, vitae facilisis ipsum. Morbi id turpis
              euismod, rhoncus tortor quis, lobortis sapien. Sed imperdiet nulla
              in leo ullamcorper, in finibus elit porta. Sed eget congue neque,
              mattis finibus neque. In vel dolor ac augue pretium suscipit. Ut
              nec massa in ligula vestibulum mattis. Suspendisse imperdiet lorem
              eleifend nisi euismod, vel consequat ipsum luctus. Morbi auctor
              vulputate hendrerit. Etiam vel lectus tortor. Pellentesque non
              pharetra mi. Cura
            </p>
            <p
              className={
                Change == 2
                  ? "m-0 ff_poppins  fw-normal fs_md opacity-75"
                  : "d-none"
              }
            >
              Sed nec ultricies felis, vitae facilisis ipsum. Morbi id turpis
              euismod, rhoncus tortor quis, lobortis sapien.
            </p>
            <p
              className={
                Change == 3
                  ? "m-0 ff_poppins  fw-normal fs_md opacity-75"
                  : "d-none"
              }
            >
              😂😂😂❤️❤️❤️❤️🤞🤞
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default UseStateDesc;
