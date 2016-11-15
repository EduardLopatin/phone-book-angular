angular
    .module('app')
    .factory('localStorageOperationsService', localStorageOperations);



function localStorageOperations($http) {

    function getDataFromJson() {
        return $http.get('./app/clients.json');
    }


    var organizeAndGetData = function() {
        if(!localStorage.userList){
            getDataFromJson().then(function (response) {
                var userListData = response.data;
                setUserList(userListData);
                return userListData
            })
        }else {
           return getUserList();
        }
    }
    var setUserList =  function (data) {
        data = JSON.stringify(data);
        localStorage.userList = data
    };
    var getUserList = function () {
        return  JSON.parse(localStorage.userList);

    };
    var setUserData =  function (data) {
        localStorage.userData = JSON.stringify(data)
    };
    var getUserData = function () {
        return JSON.parse(localStorage.userData)
    };

    return {
        organizeAndGetData: organizeAndGetData,
        setUserList: setUserList,
        getUserList: getUserList,
        setUserData: setUserData,
        getUserData: getUserData
    }
}