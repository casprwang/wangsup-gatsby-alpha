import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
{/* import ArticleMeta from './ArticleMeta.jsx' */}

class Article extends React.Component {

  render() {
    const { title, category, path, description, date, tags } = this.props.data;
    console.log(this)

    return (
      <div className="article">
        {/* <ArticleMeta tags={tags} category={category} date={date}></ArticleMeta> */}
        <Link to={prefixLink(`${path}`)}>
          <div className="article-title">
            <h3><Link to={prefixLink(`${path}`)}>{title}</Link></h3>
            {/* {this.getPostDate()} */}
          </div>
          <div className="article-description">
            <p>{description}</p>
          </div>
          <div className="article-read" />
        </Link>
      </div>

    );
  }
}

export default Article;
