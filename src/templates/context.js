/* eslint-env node */
'use strict';
var fs = require('fs');
var config	= require('../../tasks/config.json');

module.exports = {
  baseUrl: 'https://airmob.link',
  buildTime: new Date(),
  release: global._release,

  url: function url() {
    var page = this.path.name === 'index' ? '' : '/' + this.path.name;
    var dir = this.path.dir ? '/' + this.path.dir : '';
    return this.baseUrl + dir + page;
  },
  spriteSvg: fs.readFileSync(config.buildDir + '/svg/open-iconic/sprite/open-iconic.min.svg', 'utf8') // eslint-disable-line no-sync
};
