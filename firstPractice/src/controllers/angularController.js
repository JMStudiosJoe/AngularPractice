var app = angular.module("firstApp", []);

app.controller('firstController', ['$scope', '$log', function($scope, $log){
	console.log("yes this is auto refreshing");
	$scope.hello = "joey";
	$scope.wat = "why";
	console.log($scope.hello);
}]);