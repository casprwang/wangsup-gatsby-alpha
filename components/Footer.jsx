import React from 'react';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';

const Icon = ({ icon }) =>
  <div>
    <span className={`icon icon-${icon}`} style={{ backgroundImage: `url(${prefixLink(`/icons/${icon}.svg`)})` }} />
  </div>

export default function Footer() {
  return (
    <footer>
      <section>
        <p>
          <a href="mailto:wangsongiam@gmail.com" >
            <Icon icon="send" /> {config.email}
          </a>
        </p>
        <ul>
          <li>
            <a rel="noopener noreferrer" target="__blank" href={config.facebook}>
              <Icon icon="facebook" />
            </a>
          </li>
          <li>
            <a rel="noopener noreferrer" target="__blank" href={config.twitter}>
              <Icon icon="twitter" />
            </a>
          </li>
          <li>
            <a rel="noopener noreferrer" target="__blank" href={config.github}>
              <Icon icon="github" />
            </a>
          </li>
          <li>
            <a rel="noopener noreferrer" target="__blank" href={config.linkedin}>
              <Icon icon="linkedin" />
            </a>
          </li>
          <li>
            <a rel="noopener noreferrer" target="__blank" href={config.medium}>
              <Icon icon="medium" />
            </a>
          </li>
          <li>
            <a rel="noopener noreferrer" target="__blank" href={config.lastm}>
              <Icon icon="lastfm" />
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
}
