'use strict';

angular.module('AngularCMSApp')

  .controller('MessageFlashCtrl',
  function ($scope, $timeout, MessageFlashFactory, MessageFlashActions) {
    $scope.$on(MessageFlashActions.NEW_MESSAGE, function () {
      $scope.message = MessageFlashFactory.getMessage();
      $scope.isVisible = true;

      return $timeout(function () {
        $scope.isVisible = false;
        $scope.message = '';
        return $scope.message;
      }, 2500);
    });
  });
