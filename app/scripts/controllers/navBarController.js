'use strict';

angular.module('eventosEnHondurasApp')
  .controller('NavBarController',['$scope','$modal','EventService', function ($scope, $modal, EventService) {


        $scope.addEvent = function(){
            $modal.open({
                templateUrl: 'views/add-event.html',
                controller: 'AddEventController',
                size: 'lg',
                backdrop : 'static'
            });
        };

        var init = function(){

        };

        init();
  }]);
