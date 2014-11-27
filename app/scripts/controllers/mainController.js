'use strict';

angular.module('eventosEnHondurasApp')
  .controller('MainController',['$scope','EventService', function ($scope, EventService) {

        var success = function(results) {
            console.log(results);
        };

        var error = function(error) {
            console.log(error);
        };

        var init = function(){
            EventService.GetAllEvents(success, error);
        };

        init();
  }]);
