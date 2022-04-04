/** @jsx jsx */
import { jsx } from "theme-ui"
import { withPrefix } from "gatsby"

const PixelMe = (props) => {
  return (
    <div class='wowImgWorked'>
      <img src={withPrefix(`/bf-pxl.png`)} alt="Billy, Front end Web dev" />
    </div>
  );
};

export default PixelMe
