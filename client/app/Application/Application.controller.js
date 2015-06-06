'use strict';

angular.module('AngularCMSApp')

  .controller('ApplicationCtrl', function ($scope) {
    $scope.site = {
      logo: '',
      footer: 'Copyright 2015 Angular CMS'
    };
  });
