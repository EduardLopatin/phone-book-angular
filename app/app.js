angular
    .module('app', ['ui.router'])
    .config(appConfig);


function appConfig($urlRouterProvider) {

    // $stateProvider.state(userList);
    // $stateProvider.state({
    //     name: 'userPage',
    //     url: '/userPage',
    //     templateUrl: '/app/controllers/userPage/userPage.html'
    // });

    $urlRouterProvider.otherwise('/userList')
}