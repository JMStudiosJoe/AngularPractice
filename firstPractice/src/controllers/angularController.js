

app.controller('firstController', ['$scope', function($scope){
	console.log("yes this is auto refreshing");
	$scope.hello = "joey";
	$scope.wat = "why";
	console.log($scope.hello);
}]);
app.config(function($logProvider){
    $logProvider.debugEnabled(true);
});