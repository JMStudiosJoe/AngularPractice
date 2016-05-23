

app.controller('firstController', ['$scope','dataFactory', function($scope, dataFactory){

	$scope.hello = "joey";
	$scope.remoteData="";
	$scope.apiWeatherData ={};
	$scope.getD = function() 
	{
		console.log("4 years");
        dataFactory.getData().then(function (response) 
        {
        	console.log("5 years");
            $scope.remoteData = response.data;


        }, 
        function (error) 
        {
            $scope.status = 'Unable to load customer data: ' + error.message;
            console.log(error);
            console.log($scope.status);
        });
    }
    $scope.getWeatherData = function()
    {
    	dataFactory.getWeatherData().then(function (response) 
        {
        	console.log("weather daaata");
            $scope.apiWeatherData = response.data;
            console.log($scope.apiWeatherData);

        }, 
        function (error) 
        {
            $scope.status = 'Unable to load customer data: ' + error.message;
            console.log(error);
            console.log($scope.status);
        });
    }

}]);
app.config(function($logProvider){
    $logProvider.debugEnabled(true);
});