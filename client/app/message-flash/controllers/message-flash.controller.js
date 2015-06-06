'use strict';

angular.module('message.flash')

  .controller('MessageFlashCtrl',
  function ($scope, MessageFlashFactory, $timeout) {
    $scope.$on('NEW_MESSAGE', function () {
      $scope.message = MessageFlashFactory.getMessage();
      $scope.isVisible = true;

      return $timeout(function () {
        $scope.isVisible = false;
        $scope.message = ''
        return $scope.message;
      }, 2500);
    });
  });
