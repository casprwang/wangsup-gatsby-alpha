import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';

export default class Index extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="main-container">
          <Helmet title={config.siteTitle} meta={[{ 'name': 'description', 'content': 'sample' }]} />

          <div className="main-container-title">
            <h1>{config.siteTitle}</h1>
          </div>

          <div className="main-container-subtitle">
            <h3>{config.siteDescription}</h3>
          </div>

          <div className="main-container-links">
            <ul>
              <li>
                <Link to={prefixLink('/philosophy/')}>Philosophy</Link>
              </li>
              <li>
                <Link to={prefixLink('/articles/')}>Articles</Link>
              </li>
              <li>
                <a href="https://github.com/bntzio/gatsby-starter-alchemy" target="_blank">Github</a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    );
  }
}
