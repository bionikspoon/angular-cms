'use strict';

angular.module('message.flash')

  .directive('messageFlash', function () {

    return {
      template: '<div></div>',
      restrict: 'EA',
      link: function (scope, element, attrs) {
        element.text('this is the messageFlash directive');
      }
    };
  });
