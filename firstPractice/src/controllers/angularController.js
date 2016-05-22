

app.controller('firstController', ['$scope', function($scope){

	$scope.hello = "joey";


}]);
app.config(function($logProvider){
    $logProvider.debugEnabled(true);
});