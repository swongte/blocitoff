
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

 


