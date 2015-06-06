'use strict';

angular.module('AngularCMSApp')
  .directive('application', function () {
    return {
      templateUrl: 'app/application/application.html',
      restrict: 'E',
      controller: 'ApplicationCtrl'
    };
  });
