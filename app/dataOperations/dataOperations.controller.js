angular
    .module('dataOperations.controller', ['jsonDataOperations.service', 'localStorageOperations.service'])
    .controller('dataCtrl', dataCtrl);
    function dataCtrl(jsonDataOperationsService, localStorageOperationsService, $scope) {
        checkLocalStorage();

        function checkLocalStorage() {
            if(!localStorage.userList){
                jsonDataOperationsService.getPromiseFromJson().then(function (response) {
                    $scope.userListData = response.data;
                    localStorageOperationsService.setUserList($scope.userListData)
                })
            }else {
                $scope.userListData = localStorageOperationsService.getUserList();
            }
        }
    }