'use strict';

describe('Filter: formatUrl', function () {

  // load the filter's module
  beforeEach(module('AngularCMSApp'));

  // initialize a new instance of the filter before each test
  var formatUrl;
  beforeEach(inject(function ($filter) {
    formatUrl = $filter('formatUrl');
  }));

  it('should return the input prefixed with "formatUrl filter:"', function () {
    var text = 'angularjs';
    expect(formatUrl(text)).toBe('formatUrl filter: ' + text);
  });

});
