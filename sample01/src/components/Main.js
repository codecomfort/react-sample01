import React, { Component, PropTypes } from 'react';

class Main extends Component {
  static propTypes = {
    photos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      src: PropTypes.string,
      alt: PropTypes.string
    }))
  }

  render () {
    return (
      <div id="main">
          <div className="header">
              <h1>Page Title</h1>
              <h2>A subtitle for your page goes here</h2>
          </div>

          <div className="content">
              <h2 className="content-subhead">How to use this layout</h2>
              <p>
                  To use this layout, you can just copy paste the HTML, along with the CSS in <a href="/css/layouts/side-menu.css" alt="Side Menu CSS">side-menu.css</a>, and the JavaScript in <a href="/js/ui.js">ui.js</a>. The JS file uses vanilla JavaScript to simply toggle an <code>active</code> class that makes the menu responsive.
              </p>

              <h2 className="content-subhead">Now Let''s Speak Some Latin</h2>
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <div className="pure-g">
                { this.props.photos.map( (photo) => {
                    return (
                      <div className="pure-u-1-4" key={ photo.id }>
                        <img className="pure-img-responsive" src={ photo.src } alt={ photo.alt } />
                      </div>
                    )
                })}
              </div>

              <h2 className="content-subhead">Try Resizing your Browser</h2>
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
          </div>
      </div>
    )
  }
}

export default Main
