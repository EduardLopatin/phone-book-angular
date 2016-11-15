angular.module('app')
    .controller('userListCtrl', userListCtrl);

function userListCtrl($scope, $state, localStorageOperationsService) {
    // $scope.userListData = localStorageOperationsService.organizeAndGetData();
    console.log(localStorageOperationsService.organizeAndGetData());

    this.setUserData = function (user) {
        $state.go('userPage', {user: user})
    };
}