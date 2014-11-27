/**
 * Created by richardsiwady on 11/26/14.
 */
angular.module('eventosEnHondurasApp')
    .service('EventService',[function(){

        this.GetAllEvents = function(success, error){
            var Eventos = Parse.Object.extend('Eventos');
            var query = new Parse.Query(Eventos);
            query.limit(24);
            query.ascending('Fecha');
            query.find({
                success: success,
                error: error
            });
        };

    }]);