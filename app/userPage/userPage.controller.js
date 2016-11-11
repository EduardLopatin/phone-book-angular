angular
    .module('userPage.controller', ['localStorageOperations.service'])
    .controller('userPageCtrl', userPageCtrl);

    function userPageCtrl($scope, localStorageOperationsService) {
        getUserDataFromLocalStorage();

        $scope.changeEMail = function () {
            $scope.emailOptions = true
        }
        $scope.cancelEmailEditor = function () {
            $scope.emailOptions = false
        }
        $scope.saveEmail = function (input) {
            $scope.userData.contact.email = input;
            $scope.cancelEmailEditor();
            localStorageOperationsService.setUserData($scope.userData);
            changeUserInList()
        }

        $scope.changePhone = function () {
            $scope.phoneOptions = true
        }
        $scope.cancelPhoneEditor = function () {
            $scope.phoneOptions = false
        }
        $scope.savePhone = function (input) {
            $scope.userData.contact.phone = input;
            $scope.cancelPhoneEditor();
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