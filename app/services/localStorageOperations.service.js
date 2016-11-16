angular
    .module('app')
    .factory('localStorageOperationsService', localStorageOperations);



function localStorageOperations($http) {
var data;
    function getResponseFromJson() {
       return $http.get('./app/clients.json')
    }
    var checkLocalStorage = function() {
        if(localStorage.userList){
           return true
        }
    }
    var setUserList =  function (data) {
        data = JSON.stringify(data);
        localStorage.userList = data
    };
    var getUserList = function () {
        return  JSON.parse(localStorage.userList);

    };
    var setUser =  function (data) {
        localStorage.userData = JSON.stringify(data)
    };
    var getUser = function () {
        return JSON.parse(localStorage.userData)
    };

    return {
        checkLocalStorage: checkLocalStorage,
        getResponseFromJson: getResponseFromJson,
        setUserList: setUserList,
        getUserList: getUserList,
        setUser: setUser,
        getUser: getUser
    }
}