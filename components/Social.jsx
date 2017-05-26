import React from 'react';
import { ShareButtons, generateShareIcon } from 'react-share';
import { prefixLink } from 'gatsby-helpers';


const { LinkedinShareButton, TwitterShareButton } = ShareButtons;
const TwitterIcon = generateShareIcon('twitter');
const LinkedinIcon = generateShareIcon('linkedin');


const TweetThis = props =>
  <TwitterShareButton className="icon-test" url={prefixLink(`${props.path}`)} title={props.title} via={'supsupsong'} className={'share-icons'}>
    <TwitterIcon round size={32} />
  </TwitterShareButton>;

const LinkedThis = props =>
  <LinkedinShareButton url={prefixLink(`${props.path}`)} title={props.title}>
    <LinkedinIcon round size={32}></LinkedinIcon>
  </LinkedinShareButton>

export { TweetThis, LinkedThis};
