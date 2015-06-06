'use strict';

describe('Directive: messageFlash', function () {

  // load the directive's module
  beforeEach(module('AngularCMSApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<message-flash></message-flash>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the messageFlash directive');
  }));
});
