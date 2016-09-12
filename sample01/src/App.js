import React, { Component } from 'react';
import './css/side-menu.css';
import MenuLink from './components/MenuLink'
import Menu from './components/Menu'
import Main from './components/Main'

class App extends Component {
  render() {
    const SAMPLE_DATA = [
      { id: 0, src: "http://farm3.staticflickr.com/2875/9069037713_1752f5daeb.jpg", alt: "Peyto Lake"},
      { id: 1, src: "http://farm3.staticflickr.com/2813/9069585985_80da8db54f.jpg", "alt": "Train"},
      { id: 2, src: "http://farm6.staticflickr.com/5456/9121446012_c1640e42d0.jpg", alt: "T-Shirt Store"},
      { id: 3, src: "http://farm8.staticflickr.com/7357/9086701425_fda3024927.jpg", alt: "Mountain"}
    ]
    return (
      <div id="layout">
          <MenuLink />
          <Menu />
          <Main photos={ SAMPLE_DATA } />
      </div>
    );
  }
}


export default App;
