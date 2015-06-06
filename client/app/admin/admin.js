'use strict';

angular.module('AngularCMSApp') //
  .config(function ($routeProvider) {
    $routeProvider

      .when('/admin', {
        templateUrl: 'app/admin/admin.html',
        controller: 'AdminCtrl'
      });
  });
