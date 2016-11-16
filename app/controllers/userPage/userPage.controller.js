angular.module('app')
    .controller('userPageCtrl', userPageCtrl);

    function userPageCtrl($scope, $state, $stateParams, localStorageOperationsService, sessionStorageOperationsService) {
        var self = this;
        $scope.userData =  sessionStorageOperationsService.organizeAndGetData($stateParams.user);
        if(!$scope.userData){
           $state.go('userList')
       }
        this.changeEMail = function () {
            $scope.emailOptions = true
        }
        this.cancelEmailEditor = function () {
            $scope.emailOptions = false
        }
        this.saveEmail = function () {
            this.cancelEmailEditor();
            sessionStorageOperationsService.setData($scope.userData);
            changeUserInList()
        }

        this.changePhone = function () {
            $scope.phoneOptions = true
        }
        this.cancelPhoneEditor = function () {
            $scope.phoneOptions = false
        }
        this.savePhone = function () {
            this.cancelPhoneEditor();
            sessionStorageOperationsService.setData($scope.userData);
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
    }