angular
    .module('userList.controller', ['localStorageOperations.service'])
    .controller('userListCtrl', userListCtrl);

function userListCtrl($scope, $state, localStorageOperationsService) {
    $scope.userListData = localStorageOperationsService.organizeAndGetData();
    $scope.setUserData = function (user) {
        localStorageOperationsService.setUserData(user);
        serfToUserProfile();
    };
    function serfToUserProfile() {
        $state.go('userPage')
    }
}