/* eslint-env node */
'use strict';

module.exports = {
  baseUrl: 'https://airmob.link',
  buildTime: new Date(),
  release: global._release,

  url: function url() {
    var page = this.path.name === 'index' ? '' : '/' + this.path.name;
    var dir = this.path.dir ? '/' + this.path.dir : '';
    return this.baseUrl + dir + page;
  }
};
