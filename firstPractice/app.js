var app=angular.module("firstApp",[]);app.controller("firstController",["$scope","dataFactory",function(t,a){t.hello="joey",t.remoteData="",t.apiWeatherData={},t.getD=function(){console.log("4 years"),a.getData().then(function(a){console.log("5 years"),t.remoteData=a.data},function(a){t.status="Unable to load customer data: "+a.message,console.log(a),console.log(t.status)})},t.getWeatherData=function(){a.getWeatherData().then(function(a){console.log("weather daaata"),t.apiWeatherData=a.data,console.log(t.apiWeatherData)},function(a){t.status="Unable to load customer data: "+a.message,console.log(a),console.log(t.status)})}}]),app.config(["$logProvider",function(t){t.debugEnabled(!0)}]),app.directive("customPass",[function(){return{restrict:"E",scope:{jmsdata:"="},templateUrl:"/src/templates/dataPassed.html"}}]),app.directive("firstOne",[function(){return{restrict:"E",templateUrl:"/src/templates/firstDirective.html"}}]),app.factory("dataFactory",["$http",function(t){var a="http://localhost:5000/hello/world",e="http://localhost:5000/weather",o={};return o.getData=function(){return t.get(a)},o.getWeatherData=function(){return console.log("weather data"),t.get(e)},o}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsImNvbnRyb2xsZXJzL2FuZ3VsYXJDb250cm9sbGVyLmpzIiwiZGlyZWN0aXZlcy9kYXRhUGFzc0RpcmVjdGl2ZS5qcyIsImRpcmVjdGl2ZXMvZmlyc3REaXJlY3RpdmUuanMiLCJmYWN0b3JpZXMvZmlyc3RGYWN0b3J5LmpzIl0sIm5hbWVzIjpbImFwcCIsImFuZ3VsYXIiLCJtb2R1bGUiLCJjb250cm9sbGVyIiwiJHNjb3BlIiwiZGF0YUZhY3RvcnkiLCJoZWxsbyIsInJlbW90ZURhdGEiLCJhcGlXZWF0aGVyRGF0YSIsImdldEQiLCJjb25zb2xlIiwibG9nIiwiZ2V0RGF0YSIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJlcnJvciIsInN0YXR1cyIsIm1lc3NhZ2UiLCJnZXRXZWF0aGVyRGF0YSIsImNvbmZpZyIsIiRsb2dQcm92aWRlciIsImRlYnVnRW5hYmxlZCIsImRpcmVjdGl2ZSIsInJlc3RyaWN0Iiwic2NvcGUiLCJqbXNkYXRhIiwidGVtcGxhdGVVcmwiLCJmYWN0b3J5IiwiJGh0dHAiLCJ1cmxCYXNlIiwid2VhdGhlclVSTCIsImdldCJdLCJtYXBwaW5ncyI6IkFBQUEsR0FBQUEsS0FBQUMsUUFBQUMsT0FBQSxjQ0VBRixLQUFBRyxXQUFBLG1CQUFBLFNBQUEsY0FBQSxTQUFBQyxFQUFBQyxHQUVBRCxFQUFBRSxNQUFBLE9BQ0FGLEVBQUFHLFdBQUEsR0FDQUgsRUFBQUksa0JBQ0FKLEVBQUFLLEtBQUEsV0FFQUMsUUFBQUMsSUFBQSxXQUNBTixFQUFBTyxVQUFBQyxLQUFBLFNBQUFDLEdBRUFKLFFBQUFDLElBQUEsV0FDQVAsRUFBQUcsV0FBQU8sRUFBQUMsTUFJQSxTQUFBQyxHQUVBWixFQUFBYSxPQUFBLGlDQUFBRCxFQUFBRSxRQUNBUixRQUFBQyxJQUFBSyxHQUNBTixRQUFBQyxJQUFBUCxFQUFBYSxXQUdBYixFQUFBZSxlQUFBLFdBRUFkLEVBQUFjLGlCQUFBTixLQUFBLFNBQUFDLEdBRUFKLFFBQUFDLElBQUEsa0JBQ0FQLEVBQUFJLGVBQUFNLEVBQUFDLEtBQ0FMLFFBQUFDLElBQUFQLEVBQUFJLGlCQUdBLFNBQUFRLEdBRUFaLEVBQUFhLE9BQUEsaUNBQUFELEVBQUFFLFFBQ0FSLFFBQUFDLElBQUFLLEdBQ0FOLFFBQUFDLElBQUFQLEVBQUFhLGNBS0FqQixJQUFBb0IsUUFBQSxlQUFBLFNBQUFDLEdBQ0FBLEVBQUFDLGNBQUEsTUMzQ0F0QixJQUFBdUIsVUFBQSxjQUFBLFdBQ0EsT0FDQUMsU0FBQSxJQUNBQyxPQUNBQyxRQUFBLEtBRUFDLFlBQUEscUNDTkEzQixJQUFBdUIsVUFBQSxZQUFBLFdBQ0EsT0FDQUMsU0FBQSxJQUNBRyxZQUFBLHlDQ0VBM0IsSUFBQTRCLFFBQUEsZUFBQSxRQUFBLFNBQUFDLEdBRUEsR0FBQUMsR0FBQSxvQ0FFQUMsRUFBQSxnQ0FDQTFCLElBZ0NBLE9BN0JBQSxHQUFBTyxRQUFBLFdBRUEsTUFBQWlCLEdBQUFHLElBQUFGLElBRUF6QixFQUFBYyxlQUFBLFdBRUEsTUFEQVQsU0FBQUMsSUFBQSxnQkFDQWtCLEVBQUFHLElBQUFELElBdUJBMUIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKFwiZmlyc3RBcHBcIiwgW10pOyIsIlxuXG5hcHAuY29udHJvbGxlcignZmlyc3RDb250cm9sbGVyJywgWyckc2NvcGUnLCdkYXRhRmFjdG9yeScsIGZ1bmN0aW9uKCRzY29wZSwgZGF0YUZhY3Rvcnkpe1xuXG5cdCRzY29wZS5oZWxsbyA9IFwiam9leVwiO1xuXHQkc2NvcGUucmVtb3RlRGF0YT1cIlwiO1xuXHQkc2NvcGUuYXBpV2VhdGhlckRhdGEgPXt9O1xuXHQkc2NvcGUuZ2V0RCA9IGZ1bmN0aW9uKCkgXG5cdHtcblx0XHRjb25zb2xlLmxvZyhcIjQgeWVhcnNcIik7XG4gICAgICAgIGRhdGFGYWN0b3J5LmdldERhdGEoKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkgXG4gICAgICAgIHtcbiAgICAgICAgXHRjb25zb2xlLmxvZyhcIjUgeWVhcnNcIik7XG4gICAgICAgICAgICAkc2NvcGUucmVtb3RlRGF0YSA9IHJlc3BvbnNlLmRhdGE7XG5cblxuICAgICAgICB9LCBcbiAgICAgICAgZnVuY3Rpb24gKGVycm9yKSBcbiAgICAgICAge1xuICAgICAgICAgICAgJHNjb3BlLnN0YXR1cyA9ICdVbmFibGUgdG8gbG9hZCBjdXN0b21lciBkYXRhOiAnICsgZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5zdGF0dXMpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgJHNjb3BlLmdldFdlYXRoZXJEYXRhID0gZnVuY3Rpb24oKVxuICAgIHtcbiAgICBcdGRhdGFGYWN0b3J5LmdldFdlYXRoZXJEYXRhKCkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIFxuICAgICAgICB7XG4gICAgICAgIFx0Y29uc29sZS5sb2coXCJ3ZWF0aGVyIGRhYWF0YVwiKTtcbiAgICAgICAgICAgICRzY29wZS5hcGlXZWF0aGVyRGF0YSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUuYXBpV2VhdGhlckRhdGEpO1xuXG4gICAgICAgIH0sIFxuICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIFxuICAgICAgICB7XG4gICAgICAgICAgICAkc2NvcGUuc3RhdHVzID0gJ1VuYWJsZSB0byBsb2FkIGN1c3RvbWVyIGRhdGE6ICcgKyBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJHNjb3BlLnN0YXR1cyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxufV0pO1xuYXBwLmNvbmZpZyhmdW5jdGlvbigkbG9nUHJvdmlkZXIpe1xuICAgICRsb2dQcm92aWRlci5kZWJ1Z0VuYWJsZWQodHJ1ZSk7XG59KTsiLCJhcHAuZGlyZWN0aXZlKCdjdXN0b21QYXNzJywgW2Z1bmN0aW9uKCl7ICBcblx0cmV0dXJuIHtcblx0XHRyZXN0cmljdDogJ0UnLCBcblx0XHRzY29wZToge1xuXHRcdFx0am1zZGF0YTogJz0nLFxuXHRcdH0sXG5cdFx0dGVtcGxhdGVVcmw6ICcvc3JjL3RlbXBsYXRlcy9kYXRhUGFzc2VkLmh0bWwnXG5cdH07XG59XSk7IiwiYXBwLmRpcmVjdGl2ZSgnZmlyc3RPbmUnLCBbZnVuY3Rpb24oKXsgIC8vMXN0IGJpZyBlcnJvciB3YXMgaGF2aW5nICdmaXJzdE9uZScsIFsnJywgZnVuY3Rpb24oKSB0aGUgJycsIHdhcyBzYXlpbmcgaSBhbSBleHBlY3RpbmcgaW5qZWN0aW9uIGJ1dCB3aXRob3V0IGEgbmFtZSBhbmQgbm8gaW5qZWN0aW9uIGludG8gZnVuY3Rpb24gd2FzIGNhdXNpbmcgdGhlIGVycm9yXG5cdHJldHVybiB7XG5cdFx0cmVzdHJpY3Q6ICdFJywgXG5cdFx0dGVtcGxhdGVVcmw6ICcvc3JjL3RlbXBsYXRlcy9maXJzdERpcmVjdGl2ZS5odG1sJ1xuXHR9O1xufV0pO1xuXG5cbi8vIG5hbWU6ICcnLFxuXHRcdC8vIHByaW9yaXR5OiAxLFxuXHRcdC8vIHRlcm1pbmFsOiB0cnVlLFxuXHRcdC8vIHNjb3BlOiB7fSwgLy8ge30gPSBpc29sYXRlLCB0cnVlID0gY2hpbGQsIGZhbHNlL3VuZGVmaW5lZCA9IG5vIGNoYW5nZVxuXHRcdC8vIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzY29wZSwgJGVsZW1lbnQsICRhdHRycywgJHRyYW5zY2x1ZGUpIHt9LFxuXHRcdC8vIHJlcXVpcmU6ICduZ01vZGVsJywgLy8gQXJyYXkgPSBtdWx0aXBsZSByZXF1aXJlcywgPyA9IG9wdGlvbmFsLCBeID0gY2hlY2sgcGFyZW50IGVsZW1lbnRzXG5cdFx0Ly9yZXN0cmljdDogJ0UnLCAvLyBFID0gRWxlbWVudCwgQSA9IEF0dHJpYnV0ZSwgQyA9IENsYXNzLCBNID0gQ29tbWVudFxuXHRcdC8vIHRlbXBsYXRlOiAnJyxcblx0XHQvL3RlbXBsYXRlVXJsOiAnZmlyc3REaXJlY3RpdmUuaHRtbCdcblx0XHQvLyByZXBsYWNlOiB0cnVlLFxuXHRcdC8vIHRyYW5zY2x1ZGU6IHRydWUsXG5cdFx0Ly8gY29tcGlsZTogZnVuY3Rpb24odEVsZW1lbnQsIHRBdHRycywgZnVuY3Rpb24gdHJhbnNjbHVkZShmdW5jdGlvbihzY29wZSwgY2xvbmVMaW5raW5nRm4peyByZXR1cm4gZnVuY3Rpb24gbGlua2luZyhzY29wZSwgZWxtLCBhdHRycyl7fX0pKSxcbiIsIi8vaHR0cDovL2FwaS53dW5kZXJncm91bmQuY29tL2FwaS9kNDlkNWNiODBmMGZjMzgzL2NvbmRpdGlvbnMvcS9DQS9TYW5fRnJhbmNpc2NvLmpzb25cblxuLy8vL3d3dy5nb29nbGVhcGlzLmNvbS9jaXZpY2luZm8vdjIvZWxlY3Rpb25zP2tleT08WU9VUl9BUElfS0VZPlxuXG5cbiAgICBhcHAuZmFjdG9yeSgnZGF0YUZhY3RvcnknLCBbJyRodHRwJywgZnVuY3Rpb24oJGh0dHApIHtcblxuICAgIHZhciB1cmxCYXNlID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9oZWxsby93b3JsZCc7XG4gICAgLy92YXIgd2VhdGhlckRhdGEgPSAnaHR0cDovL2FwaS53dW5kZXJncm91bmQuY29tL2FwaS9kNDlkNWNiODBmMGZjMzgzL2NvbmRpdGlvbnMvcS9DQS9TYW5fRnJhbmNpc2NvLmpzb24nO1xuICAgIHZhciB3ZWF0aGVyVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC93ZWF0aGVyJ1xuICAgIHZhciBkYXRhRmFjdG9yeSA9IHt9O1xuXG5cbiAgICBkYXRhRmFjdG9yeS5nZXREYXRhID0gZnVuY3Rpb24gKCkge1xuICAgIFx0XG4gICAgICAgIHJldHVybiAkaHR0cC5nZXQodXJsQmFzZSk7XG4gICAgfTtcbiAgICBkYXRhRmFjdG9yeS5nZXRXZWF0aGVyRGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICBcdGNvbnNvbGUubG9nKFwid2VhdGhlciBkYXRhXCIpO1xuICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KHdlYXRoZXJVUkwpO1xuICAgIH07XG5cbiAgICAvLyBkYXRhRmFjdG9yeS5nZXRDdXN0b21lciA9IGZ1bmN0aW9uIChpZCkge1xuICAgIC8vICAgICByZXR1cm4gJGh0dHAuZ2V0KHVybEJhc2UgKyAnLycgKyBpZCk7XG4gICAgLy8gfTtcblxuICAgIC8vIGRhdGFGYWN0b3J5Lmluc2VydEN1c3RvbWVyID0gZnVuY3Rpb24gKGN1c3QpIHtcbiAgICAvLyAgICAgcmV0dXJuICRodHRwLnBvc3QodXJsQmFzZSwgY3VzdCk7XG4gICAgLy8gfTtcblxuICAgIC8vIGRhdGFGYWN0b3J5LnVwZGF0ZUN1c3RvbWVyID0gZnVuY3Rpb24gKGN1c3QpIHtcbiAgICAvLyAgICAgcmV0dXJuICRodHRwLnB1dCh1cmxCYXNlICsgJy8nICsgY3VzdC5JRCwgY3VzdClcbiAgICAvLyB9O1xuXG4gICAgLy8gZGF0YUZhY3RvcnkuZGVsZXRlQ3VzdG9tZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAvLyAgICAgcmV0dXJuICRodHRwLmRlbGV0ZSh1cmxCYXNlICsgJy8nICsgaWQpO1xuICAgIC8vIH07XG5cbiAgICAvLyBkYXRhRmFjdG9yeS5nZXRPcmRlcnMgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAvLyAgICAgcmV0dXJuICRodHRwLmdldCh1cmxCYXNlICsgJy8nICsgaWQgKyAnL29yZGVycycpO1xuICAgIC8vIH07XG5cbiAgICByZXR1cm4gZGF0YUZhY3Rvcnk7XG59XSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
