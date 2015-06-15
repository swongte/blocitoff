
blocitoff = angular.module('Blocitoff', ['ui.router', 'firebase']);

blocitoff.controller('Home.controller', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {
  //$scope.subText = "Welcome to the home page of Blocitoff";

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

   
   /*
   $scope.taskDate = function(task_date){
   	 //pass in the date of when task was written
     
     //if task date is older than 7 days
     //evaluate to false and hide task

     //else task date is not older than 7
     //days and function returns true

     if (task_date == 'hello'){
     	return false;
     else
     	return true;
     }

   } */
  

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


