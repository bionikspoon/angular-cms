'use strict';

//noinspection OverlyComplexFunctionJS
angular.module('AngularCMSApp')

  .controller('UpsertPageCtrl',
  function ($scope, $log, $routeParams, $location, PagesFactory,
    MessageFlashFactory) {
    $scope.pageContent = {};
    $scope.pageContent._id = $routeParams.id;
    $scope.heading = 'Add a New Page';

    if ($scope.pageContent._id !== '0') {
      $scope.heading = "Update-page";
      PagesFactory.getPage($scope.pageContent._id) //
        .then(function (response) {
          $scope.pageContent = response.data;
          $log.info('$scope.pageContent: ', $scope.pageContent);
        })//
        .catch(function (error) {
          $log.error('error: ', error);
        });
    }

    $scope.savePage = function () {
      PagesFactory.savePage($scope.pageContent)//
        .then(function (response) {
          MessageFlashFactory.setMessage('Page Saved Successfully!');
          $location.path('/admin/pages');
        })//
        .catch(function (error) {
          $log.error('error: ', error);
        });
    };

  });
