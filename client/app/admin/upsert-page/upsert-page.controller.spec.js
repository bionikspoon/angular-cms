'use strict';

describe('Controller: UpsertPageCtrl', function () {

  // load the controller's module
  beforeEach(module('angularCmsApp'));

  var UpsertPageCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UpsertPageCtrl = $controller('UpsertPageCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
