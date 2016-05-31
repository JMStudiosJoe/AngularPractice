//A couple items on the checklist will be things like making directives that use isolated scopes with @ and =. Write two kinds of services... Factory and service (both are called services). Write a filter. 
//A bit more advanced would be, look into writing a template function or a compile function.
//I would recommend watching all the egghead angular videos until then if you have free time.
app.controller('firstController', ['$scope','dataFactory', function($scope, dataFactory){

	$scope.hello = "joey";
	$scope.remoteData="";
	$scope.apiWeatherData =[];
	$scope.getD = function() 
	{
        dataFactory.getData().then(function (response) 
        {
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

        	for(var wea = 0; wea < response.data.results.length; wea++) 
        	{
        		$scope.apiWeatherData.push(angular.fromJson(response.data.results[wea]));
        	}

            console.log($scope.apiWeatherData[0].current_observation);

        }, 
        function (error) 
        {
            $scope.status = 'Unable to load customer data: ' + error.message;
            console.log(error);
            console.log($scope.status);
        });
    }

}]);
// app.config(function($logProvider){
//     $logProvider.debugEnabled(true);
// });