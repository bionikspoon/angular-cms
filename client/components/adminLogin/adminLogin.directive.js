'use strict';

angular.module('AngularCMSApp')

  .directive('adminLogin', function () {
    return {
      templateUrl: 'components/adminLogin/adminLogin.html',
      restrict: 'EA',
      controller: function ($scope, $location, $log, $q, MessageFlashFactory,
        Auth) {
        $scope.isLoggedIn = Auth.isLoggedIn;
        $scope.isAdmin = Auth.isAdmin;
        $scope.currentUser = Auth.getCurrentUser;

        $scope.logout = function () {
          Auth.logout();
          $location.path('/login');
          MessageFlashFactory.setMessage('Successfully Logged out');

        };
      }
    };
  });
