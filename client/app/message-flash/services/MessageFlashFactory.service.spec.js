'use strict';

describe('Service: MessageFlashFactory', function () {

  // load the service's module
  beforeEach(module('message.flash'));

  // instantiate service
  var MessageFlashFactory;
  beforeEach(inject(function (_FlashMessageFactory_) {
    MessageFlashFactory = _FlashMessageFactory_;
  }));

  it('should do something', function () {
    expect(!!MessageFlashFactory).toBe(true);
  });

});
