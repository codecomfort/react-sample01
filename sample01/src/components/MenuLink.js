import React, { Component } from 'react';

class MenuLink extends Component {
    render() {
      return (
        //* Menu toggle
        <a href="#menu" id="menuLink" className="menu-link">
            {/* Hamburger icon */}
            <span></span>
        </a>
      )
    }
}

export default MenuLink;
