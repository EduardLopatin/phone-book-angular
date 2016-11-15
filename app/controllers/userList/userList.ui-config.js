angular
    .module('app')
    .config(
        function ($stateProvider) {
            $stateProvider
                .state({
                name: 'userList',
                url: '/userList',
                template: '<user-list></user-list>'
            });
        }
    );