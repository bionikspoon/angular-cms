'use strict';

angular.module('message.flash')

  .directive('messageFlash', function () {

    return {
      controller: 'MessageFlashCtrl',
      template: '<p ng-if="isVisible" class="alert alert-info">{{ message }}</p>',
      restrict: 'E'
    };
  });
