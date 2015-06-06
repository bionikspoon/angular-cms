'use strict';

describe('Service: PagesFactory', function () {

  // load the service's module
  beforeEach(module('angularCmsApp'));

  // instantiate service
  var PagesFactory;
  beforeEach(inject(function (_PagesFactory_) {
    PagesFactory = _PagesFactory_;
  }));

  it('should do something', function () {
    expect(!!PagesFactory).toBe(true);
  });

});
