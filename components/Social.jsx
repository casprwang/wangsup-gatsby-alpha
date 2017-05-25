import React from 'react';
import { ShareButtons, generateShareIcon } from 'react-share';
import { prefixLink } from 'gatsby-helpers';


const { FacebookShareButton, TwitterShareButton } = ShareButtons;
{/* const FacebookIcon = generateShareIcon('facebook'); */}
const TwitterIcon = generateShareIcon('twitter');


const TweetThis = props =>
  <TwitterShareButton url={prefixLink(`${props.path}`)} title={props.title} via={'supsupsong'} className={'share-icons'}>
    <TwitterIcon round size={32} />
  </TwitterShareButton>;

export { TweetThis};
