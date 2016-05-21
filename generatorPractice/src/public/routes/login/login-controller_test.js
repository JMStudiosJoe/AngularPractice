'use strict';

describe('Controller: LoginCtrl', function () {

  var login, scope;

  beforeEach(module('GAPApp'));

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    login = $controller('LoginCtrl', {
      $scope: scope
    });
  }));

  // ---  --- //

  it('should ...', function () {
    // TODO:
    expect().toBeDefined();
  });
});
