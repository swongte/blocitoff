
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


