'use strict';

angular.module('angularCmsApp')

  .config(function ($routeProvider) {
    $routeProvider

      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
  });
