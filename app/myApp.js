angular
    .module('app', ['ui.router', 'dataOperations.controller', 'userList.controller', 'userPage.controller'])
    .config(appConfig);


function appConfig($stateProvider, $urlRouterProvider) {
    var userList = {
        name: 'userList',
        url: '/userList',
        templateUrl: '/app/userList/userList.html'
    },
        userPage = {
            name: 'userPage',
            url: '/userPage',
            templateUrl: '/app/userPage/userPage.html'
        }
    $stateProvider.state(userList);
    $stateProvider.state(userPage);

    $urlRouterProvider.otherwise('/userList')
}