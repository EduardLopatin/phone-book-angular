angular
    .module('app')
    .config(
        function ($stateProvider) {
            $stateProvider.state({
                name: 'userPage',
                url: '/userPage',
                template: '<user-page></user-page>'
            });
        }
    );