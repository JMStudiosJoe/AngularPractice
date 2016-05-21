'use strict';

describe('Directive: GAP-nav-bar', function () {

  var $compile, $rootScope, element;

  beforeEach(module('GAPApp'));

  beforeEach(inject(function (_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    element = compileNavBar();
  }));

  function compileNavBar() {
    var template = '<GAP-nav-bar></GAP-nav-bar>';
    var element = $compile(angular.element(template))($rootScope);
    $rootScope.$digest();
    return element;
  }

  // ---  --- //

  it('should ...', function () {
    // TODO:

    expect(true).toBeTruthy();
  });
});
