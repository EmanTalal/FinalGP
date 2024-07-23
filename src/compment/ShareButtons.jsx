import React from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share';

const ShareButtons = ({ url, title }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        padding: '20px',
      }}
    >
      <FacebookShareButton url={url} quote={title}>
        <FacebookIcon size={40} round />
      </FacebookShareButton>

      <TwitterShareButton url={url} title={title}>
        <TwitterIcon size={40} round />
      </TwitterShareButton>

      <LinkedinShareButton url={url} title={title}>
        <LinkedinIcon size={40} round />
      </LinkedinShareButton>

      <WhatsappShareButton url={url} title={title}>
        <WhatsappIcon size={40} round />
      </WhatsappShareButton>
    </div>
  );
};

export default ShareButtons;