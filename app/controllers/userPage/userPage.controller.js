angular.module('app')
    .controller('userPageCtrl', userPageCtrl);

    function userPageCtrl($scope, $stateParams, localStorageOperationsService, sessionStorageOperationsService) {
        var vm = this;
       this.userData =  sessionStorageOperationsService.organizeAndGetData($stateParams.user);

        this.changeEMail = function () {
            $scope.emailOptions = true
        }
        this.cancelEmailEditor = function () {
            $scope.emailOptions = false
        }
        this.saveEmail = function (input) {
            vm.userData.contact.email = input;
            this.cancelEmailEditor();
            sessionStorageOperationsService.setData(vm.userData);
            changeUserInList()
        }

        this.changePhone = function () {
            $scope.phoneOptions = true
        }
        this.cancelPhoneEditor = function () {
            $scope.phoneOptions = false
        }
        this.savePhone = function (input) {
            vm.userData.contact.phone = input;
            this.cancelPhoneEditor();
            sessionStorageOperationsService.setData(vm.userData);
            changeUserInList()
        }

        function changeUserInList() {
            var userId = vm.userData.address.zipCode;
            var validUserList =  localStorageOperationsService.getUserList();
            validUserList.forEach(function (user, index) {
                var userIdInList = user.address.zipCode;
                if(userIdInList == userId){
                    validUserList.splice(index, 1, vm.userData);
                    localStorageOperationsService.setUserList(validUserList);
                }
            })
        }
    }