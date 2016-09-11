let onStart = (doc) => {
    let $ = (e) => doc.getElementById(e)

    const layout   = $('layout'),
          menu     = $('menu'),
          menuLink = $('menuLink');

    let toggleClass = (element, className) => {
      let classes = element.className.split(/\s+/)
      const len = classes.length

      // マッチした className を除去
      for(let ii = 0; ii < len; ii++) {
        if (classes[ii] === className) {
          classes.splice(ii, 1);
          break;
        }
      }
      // className が見つからないならケツに付けておく
      if (len === classes.length) {
          classes.push(className);
      }

      element.className = classes.join(' ');
    }

    menuLink.onclick = (ev) => {
        const active = 'active';

        ev.preventDefault();
        toggleClass(layout, active);
        toggleClass(menu, active);
        toggleClass(menuLink, active);
    };
}

export default onStart
