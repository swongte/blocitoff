blocitoff = angular.module('Blocitoff', ["firebase"]);

/*blocitoff.factory('helloFromFactory', function () {

   return {
        sayHello: function(text){
            return "Factory says \"Hello " + text + "\"";
        }
  }

});*/


blocitoff.factory('data', ["$firebaseArray", function(){

		function($firebaseArray){
              
		      var ref = new Firebase("https://shining-inferno-4672.firebaseio.com/");
  
              //creating a syncronized array with firebase
              messages = firebaseArray(ref);
              return{

              //ADD MESSAGE METHOD
              addMessage: function(e) {
          	
              //LISTEN FOR RETURN KEY
              if (e.keyCode === 13 && msg) {
              
                var taskDate = new Date();
                taskDate = taskDate.getTime();
              
                //ADD TO FIREBASE
                messages.$add({
                  date: taskDate,
                  body: msg
                });

                //RESET MESSAGE
                msg = "";

            }

          }

        }

     

		}



}]);

