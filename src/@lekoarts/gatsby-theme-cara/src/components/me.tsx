/** @jsx jsx */

import * as React from "react"
import { withPrefix } from "gatsby"

const Me = () => {
  return (
    <img src={withPrefix(`/bf-pxl.png`)} alt="Billy, Front end Web dev" />
  );
};

export default Me
