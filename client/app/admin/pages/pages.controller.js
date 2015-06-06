'use strict';

angular.module('AngularCMSApp')

  .controller('PagesCtrl', function ($scope, $log, PagesFactory, socket) {
    $scope.message = 'Hello';
    $scope.pages = [];


    PagesFactory.getPages()
      .then(function (response) {
        $scope.pages = response.data;
        socket.syncUpdates('page', $scope.pages);
      })

      .catch(function (error) {
        $log.error('error: ', error);
      });

    $scope.deletePage = function (id) {
      PagesFactory.deletePage(id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('page');
    });
  });
