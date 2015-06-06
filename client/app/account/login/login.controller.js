'use strict';

angular.module('angularCmsApp')

  .controller('LoginCtrl', function ($scope, Auth, $location, $window, MessageFlashFactory,$log) {
    $scope.user = {};
    $scope.errors = {};

    $scope.login = function (form) {
      $scope.submitted = true;

      if (form.$valid) {
        Auth.login({
          email: $scope.user.email,
          password: $scope.user.password
        }) //
          .then(function () {
            // Logged in, redirect to home
            $location.path('/');
          }) //
          .catch(function (err) {
            MessageFlashFactory.setMessage(err.message);
            $log.debug('err.message: ', err.message);
            $scope.errors.other = err.message;
          });
      }
    };

    $scope.loginOauth = function (provider) {
      $window.location.href = '/auth/' + provider;
    };
  });
