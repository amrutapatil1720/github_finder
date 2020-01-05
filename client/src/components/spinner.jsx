import React, { Fragment } from "react";

const Spinner = () => {
  return (
    <Fragment>
      <img
        src="../../../spinner.gif"
        alt="Loading..."
        style={{ width: "200px", margin: "auto", display: "block" }}
      />
    </Fragment>
  );
};

export default Spinner;
