var app = angular.module("firstApp", []);

app.controller('firstController', ['$scope', '$log', function($scope, $log){
	console.log("JJJOOOEEEEYYYYYYY");
	$scope.hello = "joey";
	$scope.wat = "why";
	console.log($scope.hello);
}]);