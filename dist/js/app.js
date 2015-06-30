(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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




},{"./controllers":2}],2:[function(require,module,exports){

blocitoff = angular.module('Blocitoff', ['ui.router', 'firebase']);

blocitoff.controller('Home.controller', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {
  //$scope.subText = "Welcome to the home page of Blocitoff";

  var ref = new Firebase("https://shining-inferno-4672.firebaseio.com/");
  
  //creating a syncronized array with firebase
  $scope.messages = $firebaseArray(ref);

          //ADD MESSAGE METHOD
          $scope.addMessage = function(e) {

          	
            //LISTEN FOR RETURN KEY
            if (e.keyCode === 13 && $scope.msg) {
              
              var taskDate = new Date();
              $scope.taskDate = taskDate.getTime();
              //var value = taskDate.getTime();
              console.log($scope.taskDate);

              //ADD TO FIREBASE
              $scope.messages.$add({
                date: $scope.taskDate,
                //timestamp: Firebase.ServerValue.TIMESTAMP,
                body: $scope.msg
              });

              //RESET MESSAGE
              $scope.msg = "";

    

            }
          }

   
   /*
   $scope.dateCheck = function(value){
   	 
   	 //pass in the date of when task was written
     
     //if task date is older than 7 days
     //evaluate to false and hide task

     //else task date is not older than 7
     //days and function returns true

     if (value % 2 == 0){
     	return true;
     else
     	return false;
     

   }*/
  

}]);

blocitoff.controller('Submit.controller', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {
  //$scope.subText ="hello";
  var ref = new Firebase("https://shining-inferno-4672.firebaseio.com/");

  $scope.messages = $firebaseArray(ref);

          //ADD MESSAGE METHOD
          $scope.addMessage = function(e) {
          	
            //LISTEN FOR RETURN KEY
            if (e.keyCode === 13 && $scope.msg) {
              //ALLOW CUSTOM OR ANONYMOUS USER NAMES
              //var name = $scope.name || "anonymous";

              //ADD TO FIREBASE
              $scope.messages.$add({
                //from: name,
                body: $scope.msg
              });

              //RESET MESSAGE
              $scope.msg = "";
              
            }
          }

  
	}]);



},{}]},{},[1]);