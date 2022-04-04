/** @jsx jsx */

import * as React from "react"
import { withPrefix } from "gatsby"

const PixelMe = () => {
  return (
    <img src={withPrefix(`/bf-pxl.png`)} alt="Billy, Front end Web dev" />
  );
};

export default PixelMe
