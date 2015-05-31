
blocitoff = angular.module('Blocitoff', ['ui.router']);

blocitoff.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
   $locationProvider.html5Mode({
   	  enabled: true,
   	  requireBase: false
   });
 
   $stateProvider.state('home', {
     url: '/',
     controller: 'Home.controller',
     templateUrl: '/templates/home.html'
   });

 }]);

blocitoff.controller('Home.controller', ['$scope', function($scope) {
  
  $scope.subText = "Welcome to the home page of Blocitoff";

}]);

/*var myDataRef = new Firebase('https://shining-inferno-4672.firebaseio.com/');

$('#task').keypress(function (e) {
        if (e.keyCode == 13) {
          var task = $('#task').val();
          //var text = $('#messageInput').val();
          myDataRef.set('User ' + name + ' says ' + text);
          $('#task').val('');
        }
      });
 

*/
