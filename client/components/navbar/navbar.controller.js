'use strict';

angular.module('AngularCMSApp')

  .controller('NavbarCtrl',
  function ($scope, $location, $log, Auth, PagesFactory) {
    var isAdminPath = function () {
      return ($location.path().substring(0, 6) === '/admin');
    };

    if (isAdminPath()) {
      $scope.menu = [
        {
          title: 'Pages',
          link: 'admin'
        },
        {
          title: 'Site Settings',
          url: 'admin/site-settings'
        }
      ];
    } else {
      PagesFactory.getPages()//
        .then(function (response) {
          $scope.menu = response.data;
        })//
        .catch(function (error) {
          $log.debug('navbar.controller    ', 'error: ', error);
        });
    }

    $scope.isActive = function (route) {
      return route === $location.path();
    };
  });
