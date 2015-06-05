'use strict';

angular.module('angularCmsApp') //
  .config(function ($routeProvider) {
    $routeProvider

      .when('/admin', {
        templateUrl: 'app/admin/admin.html',
        controller: 'AdminCtrl'
      });
  });
