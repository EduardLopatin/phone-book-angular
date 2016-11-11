angular
    .module('jsonDataOperations.service', [])
    .factory('jsonDataOperationsService', getDataFactory);

function getDataFactory($http) {
        var promise = $http.get('./app/clients.json');

    return {
       getPromiseFromJson: function () {
          return promise
       }
   }
}