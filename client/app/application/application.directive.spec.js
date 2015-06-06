'use strict';

describe('Directive: application', function () {

  // load the directive's module and view
  beforeEach(module('AngularCMSApp'));
  beforeEach(module('app/application/application/application.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<application></application>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the application directive');
  }));
});