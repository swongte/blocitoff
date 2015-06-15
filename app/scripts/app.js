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

   $stateProvider.state('submit', {
     url: '/submitview',
     controller: 'Submit.controller',
     templateUrl: '/templates/submitview.html'
   });



 }]);



