/**
 * Created by richardsiwady on 11/26/14.
 */
angular.module('eventosEnHondurasApp')
    .service('ParseService',[function(){
        // gotta find a way to hide this
        var app_id = 'A3T7a9bvEseiLB108k6g6dH29e3KK9AHfVN5W1qg';
        var js_key = 'VueW1g311Q3zbuqXh5vIrzTbkm5qaag2PHIoTdYS';

        this.init = function(){
            Parse.initialize(app_id, js_key);
        };

}]);