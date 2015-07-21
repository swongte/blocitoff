
blocitoff = angular.module('Blocitoff');

blocitoff.factory('helloFromFactory', function () {

   return {
        sayHello: function(text){
            return "Factory says \"Hello " + text + "\"";
        }

});