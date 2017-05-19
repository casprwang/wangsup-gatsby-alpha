import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import uuid from 'node-uuid';
import moment from 'moment';
import _ from 'lodash';

import Article from './Article';

// for the Main Page
class ArticlesList extends React.Component {
  componentWillMount() {
    if (typeof window !== 'undefined') {
      const body = document.getElementsByTagName('body');
      const css = body[0].style;
      // console.log(css)
      css.color = '#27373F';
      css.backgroundColor = '#00000033';
    }
  }
  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      const body = document.getElementsByTagName('body');
      const css = body[0].style;
      css.color = '#27373F';
      css.backgroundColor = '#00000033';
    }
  }
  renderPosts(route) {
    const posts = [];
    route.pages.map((page) => {
      if (page.data.layout === 'post') {
        posts.push(page);
      }
    });

    const ordered = _.sortBy(posts, (o) => {
      return new moment(o.data.date);
    }).reverse();

    return ordered.map((orderedPost) => {
      return <Article key={uuid()} data={orderedPost.data} />;
    });
  }
  render() {
    const { route } = this.props;
    const post = route.page.data;

    return (
      <div>
        <div className="articles-list">
          <div className="articles-list-container">
            <Link to={prefixLink('/')}></Link>
            <div className="articles-list-container-title">
              <h1>{post.title}</h1>
              <div className="articles-list-container-body">
                <div dangerouslySetInnerHTML={{ __html: post.body }} /></div>
            </div>
          </div>
          <div className="articles-list-container-posts">
            {this.renderPosts(route)}
          </div>
        </div>
      </div>
    );
  }
}

export default ArticlesList;
