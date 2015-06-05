'use strict';

angular.module('angularCmsApp')

  .config(function ($routeProvider) {
    $routeProvider

      .when('/admin/pages', {
        templateUrl: 'app/admin/pages/pages.html',
        controller: 'PagesCtrl'
      });
  });
