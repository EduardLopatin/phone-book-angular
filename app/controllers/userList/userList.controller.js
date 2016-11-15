angular.module('app')
    .controller('userListCtrl', userListCtrl);

function userListCtrl($state, localStorageOperationsService) {
    this.userListData = localStorageOperationsService.organizeAndGetData();
    this.setUserData = function (user) {
        this.userData =  localStorageOperationsService.setUserData(user);
        $state.go('userPage', {item: this.userData})
    };
}