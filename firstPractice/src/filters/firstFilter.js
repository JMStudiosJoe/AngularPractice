app.filter('binaryFilter', ['stringConverterFactory',function(stringConverterFactory) {

  // In the return function, we must pass in a single parameter which will be the data we will work on.
  // We have the ability to support multiple other parameters that can be passed into the filter optionally
  return function(input, optional1, optional2) {

    if(!angular.isUndefined(input))
  	{
  		console.log(input.charCodeAt(input.length - 1));
  		var tempCode = input.charCodeAt(input.length - 1)
  		console.log("WTF---->"+tempCode);
  		input = input+ tempCode+'';
  		console.log("------"+input);
  		output = stringConverterFactory.toBinaryConversion(tempCode);

    	return output;
  	}
  	else
  	{
  		

    // Do filter work here

    	return '';
  	}

    // Do filter work here
    
    

  }

}]);
app.filter('hexFilter', ['HexService',function(HexService) {

  // In the return function, we must pass in a single parameter which will be the data we will work on.
  // We have the ability to support multiple other parameters that can be passed into the filter optionally
  return function(input, optional1, optional2) {

  	if(!angular.isUndefined(input))
  	{
  		
  		var output = HexService.toHex(input);

    	// Do filter work here

    	return output;
  	}
  	else
  	{
  		

    // Do filter work here

    	return '';
  	}

    

  }

}]);
app.filter('passwordFilter', function() {

  // In the return function, we must pass in a single parameter which will be the data we will work on.
  // We have the ability to support multiple other parameters that can be passed into the filter optionally
  return function(input, optional1, optional2) {

    var output;

    // Do filter work here

    return output;

  }

});
