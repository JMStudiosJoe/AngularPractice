app.directive('firstOne', [function(){  //1st big error was having 'firstOne', ['', function() the '', was saying i am expecting injection but without a name and no injection into function was causing the error
	return {
		restrict: 'E', 
		templateUrl: '/src/templates/firstDirective.html'
	};
}]);


// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		//restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		//templateUrl: 'firstDirective.html'
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),


////LINKS
// http://www.undefinednull.com/2014/02/11/mastering-the-scope-of-a-directive-in-angularjs/
// http://stackoverflow.com/questions/14050195/angularjs-what-is-the-difference-between-and-in-directive-scope
// http://onehungrymind.com/angularjs-sticky-notes-pt-2-isolated-scope/