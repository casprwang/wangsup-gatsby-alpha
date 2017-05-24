import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import ArticleMeta from './ArticleMeta.jsx'

class Article extends React.Component {
  render() {
    const { title, path, description, date, tags } = this.props.data;

    return (
      <div className="article">
        <ArticleMeta tags={tags} date={date}></ArticleMeta>
        <Link to={prefixLink(`${path}`)}>
        <div className="article-title">
          <h3><Link to={prefixLink(`${path}`)}>{title}</Link></h3>
          <p>{date}</p>
        </div>
        <div className="article-description">
          <p>{description}</p>
        </div>
        <div className="article-read">
        </div>
        </Link>
      </div>

    );
  }
}

export default Article;
