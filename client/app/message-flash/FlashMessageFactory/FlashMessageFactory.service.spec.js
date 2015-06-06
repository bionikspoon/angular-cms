'use strict';

describe('Service: FlashMessageFactory', function () {

  // load the service's module
  beforeEach(module('message.flash'));

  // instantiate service
  var FlashMessageFactory;
  beforeEach(inject(function (_FlashMessageFactory_) {
    FlashMessageFactory = _FlashMessageFactory_;
  }));

  it('should do something', function () {
    expect(!!FlashMessageFactory).toBe(true);
  });

});
