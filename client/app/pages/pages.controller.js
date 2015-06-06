'use strict';

angular.module('AngularCMSApp')

  .controller('PagesCtrl', function ($scope, $log, $routeParams, PagesFactory) {
    var url = $routeParams.url;
    PagesFactory.getPage(url)//
      .then(function (response) {
        $scope.pageContent = response.data;
      })//
      .catch(function (error) {
        $log.error('pages.controller    ', 'error: ', error);
      });
  });
