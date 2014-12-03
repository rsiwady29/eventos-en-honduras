'use strict';

angular.module('eventosEnHondurasApp')
  .controller('MainController',['$scope','EventService', function ($scope, EventService) {

        $scope.events = [];

        var success = function(results) {
            for(var i=0; i< results.length; i++){
                $scope.events.push(results[i].attributes);
            }
            $scope.$apply();
        };

        var error = function(error) {

        };

        var init = function(){
            EventService.GetAllEvents(success, error);
        };

        init();
  }]);
