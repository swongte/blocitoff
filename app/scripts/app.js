require("./controllers");


blocitoff = angular.module('Blocitoff');


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

   $stateProvider.state('taskhistory', {
     url: '/taskhistory',
     controller: 'History.controller',
     templateUrl: '/templates/taskhistory.html'
   });



 }]);



