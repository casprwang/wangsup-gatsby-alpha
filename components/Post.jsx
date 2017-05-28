import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import{ TweetThis, LinkedThis } from './Social.jsx';

class Post extends React.Component {
  componentWillMount() {
    if (typeof window !== 'undefined') {
      const body = document.getElementsByTagName('body');
      const css = body[0].style;
      css.color = 'hsl(201, 24%, 20%)';
      css.backgroundColor = 'rgba(0, 0, 0, .02)';
    }
  }
  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      const body = document.getElementsByTagName('body');
      const css = body[0].style;
      css.color = 'hsl(201, 24%, 20%)';
      css.backgroundColor = 'rgba(0, 0, 0, .02)';
    }
  }
  render() {
    const { route } = this.props
    const post = route.page.data
    const path = post.path = route.path;

    return (
      <div>
        <div className="post">
          <div className="post-container">
            <Link to={prefixLink('/articles/')}>
            </Link>

            <div className="post-container-title">
              <h1>{post.title}</h1>
              <div className="post-container-body">
                <div dangerouslySetInnerHTML={{ __html: post.body }} /></div>

        <ul className="social-container">
          <li><TweetThis {...post}></TweetThis></li>
          <li><LinkedThis {...post}></LinkedThis></li>
        </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
