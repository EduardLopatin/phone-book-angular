angular
    .module('localStorageOperations.service', ['jsonDataOperations.service'])
    .factory('localStorageOperationsService', localStorageOperations);

function localStorageOperations(jsonDataOperationsService) {
    var organizeAndGetData = function() {
        if(!localStorage.userList){
            jsonDataOperationsService.getPromiseFromJson().then(function (response) {
                var userListData = response.data;
                setUserList(userListData);
                return userListData
            })
        }else {
          var userListData = getUserList();
           return userListData;
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