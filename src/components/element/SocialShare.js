import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  TwitterShareButton,
  TwitterIcon
} from "react-share";

import "./SocialShare.scss";

function SocialShare({ url, buttonSize }) {
  return (
    <div className="social-share--wrapper">
      <FacebookShareButton url={`${url}`}>
        <FacebookIcon size={buttonSize} round />
      </FacebookShareButton>

      <TwitterShareButton url={`${url}`}>
        <TwitterIcon size={buttonSize} round />
      </TwitterShareButton>

      <PinterestShareButton url={`${url}`}>
        <PinterestIcon size={buttonSize} round />
      </PinterestShareButton>
    </div>
  );
}

SocialShare.defaultProps = {
  buttonSize: 22
}

export default SocialShare;
