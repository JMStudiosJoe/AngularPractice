//http://api.wunderground.com/api/d49d5cb80f0fc383/conditions/q/CA/San_Francisco.json

////www.googleapis.com/civicinfo/v2/elections?key=<YOUR_API_KEY>


app.factory('dataFactory', ['$http', function($http) {

    var urlBase = 'http://localhost:5000/hello/world';
    //var weatherData = 'http://api.wunderground.com/api/d49d5cb80f0fc383/conditions/q/CA/San_Francisco.json';
    var weatherURL = 'http://localhost:5000/weather'
    var dataFactory = {};


    dataFactory.getData = function () {
    	
        return $http.get(urlBase);
    };
    dataFactory.getWeatherData = function () {

        return $http.get(weatherURL);
    };

    // dataFactory.getCustomer = function (id) {
    //     return $http.get(urlBase + '/' + id);
    // };

    // dataFactory.insertCustomer = function (cust) {
    //     return $http.post(urlBase, cust);
    // };

    // dataFactory.updateCustomer = function (cust) {
    //     return $http.put(urlBase + '/' + cust.ID, cust)
    // };

    // dataFactory.deleteCustomer = function (id) {
    //     return $http.delete(urlBase + '/' + id);
    // };

    // dataFactory.getOrders = function (id) {
    //     return $http.get(urlBase + '/' + id + '/orders');
    // };

    return dataFactory;
}]);


//first custom factory
app.factory('stringConverterFactory', ['$http', function($http) {

    
    var dataFactory = {};


    dataFactory.toBinaryConversion = function (num) {
        

        var bin = (num >>> 0).toString(2)
        //console.log(bin);
        return bin;
    };
    dataFactory.toHexConversion = function (num) {

        console.log(typeof num)
        return '0';
    };

    

    return dataFactory;
}]);