angular.module('app')
    .controller('userListCtrl', userListCtrl);

function userListCtrl($scope, $state, localStorageOperationsService) {
    getUserList();

    function getUserList() {
        if(localStorageOperationsService.checkLocalStorage()){
            $scope.userListData = localStorageOperationsService.getUserList()
        }else {
            localStorageOperationsService.getResponseFromJson().then(function (resp) {
                $scope.userListData = resp.data;
                localStorageOperationsService.setUserList($scope.userListData)
            })
        }
    }

    this.transferUserData = function (user) {
        $state.go('userPage', {user: user})
    };
}