angular.module('app')
    .controller('userPageCtrl', userPageCtrl);

    function userPageCtrl($scope, localStorageOperationsService) {
        getUserDataFromLocalStorage();

        this.changeEMail = function () {
            $scope.emailOptions = true
        }
        this.cancelEmailEditor = function () {
            $scope.emailOptions = false
        }
        this.saveEmail = function (input) {
            $scope.userData.contact.email = input;
            this.cancelEmailEditor();
            localStorageOperationsService.setUserData($scope.userData);
            changeUserInList()
        }

        this.changePhone = function () {
            $scope.phoneOptions = true
        }
        this.cancelPhoneEditor = function () {
            $scope.phoneOptions = false
        }
        this.savePhone = function (input) {
            $scope.userData.contact.phone = input;
            this.cancelPhoneEditor();
            localStorageOperationsService.setUserData($scope.userData);
            changeUserInList()
        }

        function changeUserInList() {
            var userId = $scope.userData.address.zipCode;
            var validUserList =  localStorageOperationsService.getUserList();
            validUserList.forEach(function (user, index) {
                var userIdInList = user.address.zipCode;
                if(userIdInList == userId){
                    validUserList.splice(index, 1, $scope.userData);
                    localStorageOperationsService.setUserList(validUserList);
                }
            })
        }
        function getUserDataFromLocalStorage() {
            $scope.userData = localStorageOperationsService.getUserData();
        }
    }