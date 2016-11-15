angular
    .module('app')
    .factory('sessionStorageOperationsService', sessionStorageOperations);

function sessionStorageOperations() {
    var organizeAndGetData = function (userDataFromState) {
        if(userDataFromState != null){
            setData(userDataFromState);
            return userDataFromState
        }else {
           return getData();
        }
    }
    var setData = function (data) {
        window.sessionStorage.setItem('userData', JSON.stringify(data));
    }
    function getData() {
       var userData = window.sessionStorage.getItem('userData');
       return userData = JSON.parse(userData)
    }
    return{
        organizeAndGetData:organizeAndGetData,
        setData:setData,
        getData:getData
    }
}