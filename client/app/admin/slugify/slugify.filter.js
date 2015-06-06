'use strict';

angular.module('AngularCMSApp')

  .filter('slugify', function () {
    return function (input) {
      var reNotPretty = /[^\w\s-]/gi;
      var reSpace = /[-_\s]+/g;
      return input.replace(reNotPretty, '').replace(reSpace, '-').toLowerCase();
    };
  });
