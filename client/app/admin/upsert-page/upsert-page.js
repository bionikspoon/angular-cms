'use strict';

angular.module('angularCmsApp')

  .config(function ($routeProvider) {
    $routeProvider

      .when('/admin/upsert-page/:id', {
        templateUrl: 'app/admin/upsert-page/upsert-page.html',
        controller: 'UpsertPageCtrl'
      });
  });
