'use strict';

angular.module('airmob', [])
.config(['$interpolateProvider',
function config($interpolateProvider) {

  // State configuration
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');

}]);
