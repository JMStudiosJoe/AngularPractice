(function () {
  angular.module('GAPSvgIconDirective', [])

    .directive('GAPSvgIcon', GAPSvgIcon);

  function GAPSvgIcon() {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        name: '@',
        color: '@'
      },
      templateUrl: 'components/svg-icon/svg-icon.html',
      link: link
    };

    // ---  --- //

    function link(scope, element, attrs) {
      scope.svgId = '#svg-icon-' + scope.name;
    }
  }
})();
