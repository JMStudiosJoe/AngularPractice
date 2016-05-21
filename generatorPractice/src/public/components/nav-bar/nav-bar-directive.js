(function () {
  angular.module('GAPNavBarDirective', [])

    .directive('GAPNavBar', GAPNavBar);

  function GAPNavBar() {
    return {
      restrict: 'E',
      scope: {
      },
      templateUrl: 'components/nav-bar/nav-bar.html',
      link: link
    };

    // ---  --- //

    function link(scope, element, attrs) {
    }
  }
})();
