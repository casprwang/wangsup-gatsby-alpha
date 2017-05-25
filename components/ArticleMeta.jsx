import React from 'react';
import moment from 'moment'


export default class ArticleMeta extends React.Component {
  getPostDate() {
    const { date } = this.props;
    return date ?
      <dl className="article-meta-postdate">
        <dd>{`${moment(date).format('YYYY-MM-DD')}`}</dd>
      </dl> : null;
  }

  getCategories() {
    const { category } = this.props;
    return category ?
      <dl className="article-meta-categories">
        {
          category.map(cat => <dd key={cat}>{cat}</dd>)
        }
      </dl> : null;
  }

  getTags() {
    const { tags } = this.props;
    return tags ?
      <dl className="article-meta-tags">
        {
          tags.map(tg => <dd key={tg}>{tg}</dd>)
        }
      </dl> : null;
  }

  render() {
    return (
      <div className="article-meta">
        {this.getPostDate()}
        {/* {this.getCategories()} */}
        {this.getTags()}
      </div>
    );
  }
}
