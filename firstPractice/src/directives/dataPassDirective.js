app.directive('customPass', [function(){  
	return {
		restrict: 'E', 
		scope: {
			jmsdata: '=',
		},
		templateUrl: '/src/templates/dataPassed.html'
	};
}]);