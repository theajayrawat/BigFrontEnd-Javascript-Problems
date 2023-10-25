function $(el) {
    // your code here
    return {
      css: function (property, value) {
        el.style[property] = value;
        return this;
      },
    }
  }