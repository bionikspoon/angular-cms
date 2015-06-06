'use strict';

angular.module('AngularCMSApp')

  .config(function ($routeProvider) {
    $routeProvider

      .when('/pages/:url', {
        templateUrl: 'app/pages/pages.html',
        controller: 'PagesCtrl'
      });
  });
