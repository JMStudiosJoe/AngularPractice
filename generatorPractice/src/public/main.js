'use strict';

(function () {
  angular.module('GAPApp', [
    // Third-party libraries
    'ui.router',

    // As part of the build process, all partials are automatically added the angular template cache
    'templates',

    // Miscellaneous
    'GAPConstants',
    'GAPRoutes',
//  'GAPSomeFilter',
//  'GAPSomeService',

    // Components
    'GAPNavBarDirective',
    'GAPSvgIconDirective',
    'GAPToastDirective',
    'GAPToastService',

    // Models
    'GAPDataNameService',
    'GAPUserService',

    // Routes
    'GAPHomeController',
    'GAPLoginController'
  ])

    .run(function ($rootScope) {
      $rootScope.routeState = {};

      // TODO:
    });
})();
