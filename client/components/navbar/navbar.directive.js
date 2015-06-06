'use strict';

angular.module('AngularCMSApp')
  .directive('navbar', function () {
    return {
      templateUrl: 'component/navbar/navbar.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });