
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

blocitoff.controller('History.controller', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {
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


