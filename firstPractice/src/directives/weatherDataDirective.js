app.directive('weatherDir', [function(){  //1st big error was having 'firstOne', ['', function() the '', was saying i am expecting injection but without a name and no injection into function was causing the error
	return {
		restrict: 'E', 
		scope: {
			jmsdata: '=',
		},
		templateUrl: '/src/templates/weatherDirective.html'
	};
}]);