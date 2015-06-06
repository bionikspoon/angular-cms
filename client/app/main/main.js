'use strict';

angular.module('AngularCMSApp')

  .config(function ($routeProvider) {
    $routeProvider

      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
  });
