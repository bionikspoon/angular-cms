'use strict';

angular.module('AngularCMSApp')

  .config(function ($routeProvider) {
    $routeProvider

      .when('/admin/pages', {
        templateUrl: 'app/admin/pages/pages.html',
        controller: 'PagesCtrl'
      })

      .when('/admin/pages/:id', {
        templateUrl: 'app/admin/pages/pages-upsert.html',
        controller: 'UpsertPageCtrl'
      });
  });
