'use strict';


angular.module('airmob')
.directive('lazyLoad', [function directive() {
  return {
    restrict: 'A',
    link: function link($scope, el) { // eslint-disable-line no-unused-vars
      var img = new Image();
      img.onload = function onload() {
        el.css('background-image', 'url("' + el.attr('data-src') + '")').addClass('js-fade-in');
      };
      img.src = el.attr('data-src');
    }
  };
}]);
