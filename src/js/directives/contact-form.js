'use strict';


angular.module('airmob')
.directive('contactForm', ['$http', function directive($http) {
  return {
    restrict: 'A',
    link: function link($scope) {
      // AJAX form call
      $scope.formSubmit = function formSubmit() {
        $scope.success = null;
        $scope.error = null;

        var data = {
          field0: $scope.firstName,
          field1: $scope.lastName,
          field2: $scope.email,
          field3: $scope.company,
          field4: $scope.phoneNumber
        };


        $http.post('https://opn.to/r/airmob_contact_form/', data)
        .success(function success() {
          $scope.success = true;
        }).error(function error() {
          $scope.error = true;
        });
      };
    }
  };
}]);
