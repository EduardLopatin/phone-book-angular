angular
    .module('localStorageOperations.service', [])
    .factory('localStorageOperationsService', localStorageOperations);

function localStorageOperations() {
    return {
        setUserList: function (data) {
            data = JSON.stringify(data);
            localStorage.userList = data
        },
        getUserList: function () {
            return  JSON.parse(localStorage.userList);

        },
        setUserData: function (data) {
            localStorage.userData = JSON.stringify(data)
        },
        getUserData: function () {
            return JSON.parse(localStorage.userData)
        }

    }
}