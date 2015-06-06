'use strict';

angular.module('AngularCMSApp')

  .config(function ($routeProvider) {
    $routeProvider

      .when('/admin/pages', {
        templateUrl: 'app/admin/pages/pages.html',
        controller: 'PagesCtrl'
      });
  });
