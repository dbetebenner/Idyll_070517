const React = require('react');
const IdyllComponent = require('idyll-component');

class Logo extends IdyllComponent {
  render() {
    return (
      <div className="logo-lockup">
        <a href="https://literasee.io/">
          <img className="logo" src="leaf.svg" />
          <small>Made with Literasee</small>
        </a>
      </div>
    );
  }
}

module.exports = Logo;
