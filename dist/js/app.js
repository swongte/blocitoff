(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
blocitoff = angular.module('Blocitoff', ['ui.router', 'firebase']);

require("./controllers");
require("./services");




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




},{"./controllers":2,"./services":3}],2:[function(require,module,exports){
blocitoff = angular.module('Blocitoff');

	blocitoff.controller('Home.controller', ['helloFromFactory','$scope', '$firebaseArray', function($scope, $firebaseArray, helloFromFactory) {
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
              console.log($scope.taskDate);

              //ADD TO FIREBASE
              $scope.messages.$add({
                date: $scope.taskDate,
                body: $scope.msg
              });

              //RESET MESSAGE
              $scope.msg = "";

              
            }
          }

   $scope.isValid = function(dateTaskSaved){
   	 var d = new Date();
   	 var currentDate = d.getTime();
     
     //testDate is the cut-off date limit--if a task is older than this date
     //than it will not be displayed
     var testDate = currentDate - 604800000;

     if (dateTaskSaved < testDate)
       return true;  //true hides the task
     else 
       return false; //false displays the task


    }

    $scope.fromFactory = helloFromFactory.sayHello("World");

   
  

}]);

blocitoff.controller('History.controller', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {
  //$scope.subText ="hello";
  var ref = new Firebase("https://shining-inferno-4672.firebaseio.com/");

  $scope.messages = $firebaseArray(ref);

          //ADD MESSAGE METHOD
          $scope.addMessage = function(e) {

          	
            //LISTEN FOR RETURN KEY
            if (e.keyCode === 13 && $scope.msg) {
              
              var taskDate = new Date();
              $scope.taskDate = taskDate.getTime();
              console.log($scope.taskDate);

              //ADD TO FIREBASE
              $scope.messages.$add({
                date: $scope.taskDate,
                body: $scope.msg
              });

              //RESET MESSAGE
              $scope.msg = "";

              
            }
          }

          $scope.isValid = function(dateTaskSaved){
   	      var d = new Date();
   	      var currentDate = d.getTime();
     
          //testDate is the cut-off date limit--if a task is older than this date
          //than it will not be displayed
          var testDate = currentDate - 604800000;

          if (dateTaskSaved < testDate)
            return true;  //true hides the task
          else 
            return false; //false displays the task


    }



  
	}]);






},{}],3:[function(require,module,exports){
blocitoff = angular.module('Blocitoff');

blocitoff.factory('helloFromFactory', function () {

   return {
        sayHello: function(text){
            return "Factory says \"Hello " + text + "\"";
        }
  }
});
},{}]},{},[1]);