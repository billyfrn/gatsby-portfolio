/** @jsx jsx */
import { jsx } from "theme-ui"
import { withPrefix } from "gatsby"

const PixelMe = () => {
  return (
    <img src={withPrefix(`/bf-pxl.png`)} alt="Billy, Front end Web dev" />
  );
};

export default PixelMe
