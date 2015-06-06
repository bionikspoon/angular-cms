'use strict';

describe('Controller: MessageFlashCtrl', function () {

  // load the controller's module
  beforeEach(module('message.flash'));

  var MessageFlashCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MessageFlashCtrl = $controller('MessageFlashCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
