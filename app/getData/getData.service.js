angular
    .module('getData.service', [])
    .factory('getDataAbout', getDataFactory);

function getDataFactory($http) {
    function getIt() {
        console.log('go');
       $http.get('./app/clients.json').then(function (response) {
           console.log(response.data);
       })
    }
    return{
        getIt: getIt
    }
}