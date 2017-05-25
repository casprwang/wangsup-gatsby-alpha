import React from 'react';

import '../styles/main.css';

class Template extends React.Component {
  render() {
    const { children } = this.props;
    let { data } = this.props.children.props.route.page

    return (
      <div className="wrapper">
        {children}
      </div>
    );
  }
}

export default Template;
