(function () {
  angular.module('GAPHomeController', [])

    .controller('HomeCtrl', HomeCtrl);

  function HomeCtrl(appName) {
    var home = this;

    home.appName = appName;
  }
})();
