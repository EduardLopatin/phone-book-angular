angular
    .module('app', ['ui.router', 'getData.controller'])
    .config(appConfig)
    .controller('mainCtrl', mainCtrl);



function mainCtrl() {
    console.log('hee');
}


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