'use strict';

angular.module('AngularCMSApp')
  .filter('formatUrl', function () {
    return function (input) {
      return 'formatUrl filter: ' + input;
    };
  });
