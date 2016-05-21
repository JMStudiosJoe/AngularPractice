'use strict';

describe('Module: GAPApp', function () {

  var rootScope;

  beforeEach(module('GAPApp'));

  beforeEach(inject(function ($rootScope) {
    rootScope = $rootScope;
  }));

  // ---  --- //

  it('should attach routeState to the rootScope', function () {
    expect(rootScope.routeState).toBeDefined();
  });
});
