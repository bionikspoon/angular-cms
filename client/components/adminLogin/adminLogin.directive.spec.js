'use strict';

describe('Directive: adminLogin', function () {

  // load the directive's module and view
  beforeEach(module('AngularCMSApp'));
  beforeEach(module('components/adminLogin/adminLogin.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<admin-login></admin-login>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the adminLogin directive');
  }));
});