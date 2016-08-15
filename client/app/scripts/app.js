'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
    .module('clientApp', [
        'ngAnimate',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'restangular',
        'ui.bootstrap',
        'ui.router',
    ])
    
    .config(['$locationProvider', '$urlRouterProvider', '$stateProvider', function ($locationProvider, $urlRouterProvider, $stateProvider) {
        
        $locationProvider.html5Mode(true);
        
        $urlRouterProvider.otherwise('/');
        
        $stateProvider
            .state('home', {
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl',
                url: '/'
            })
            .state('login', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl',
                url: '/login',
                resolve: {
                    // promiseObj:  ['$http', function($http){
                    //     return $http({method: 'GET', url: 'admin/'});
                    // }]
                }
                // resolve: {
                    // A nested resolve where tasks is waiting for user resolve
                //     user: function($stateParams, UserService) {
                //       return UserService.find($stateParams.id);
                //     },
                //     tasks: function(TaskService, user) {
                //       return user.canHaveTasks() ?
                //         TaskService.find(user.id) : [];
                //     }
                // }
            })
            .state('register', {
                templateUrl: 'views/register.html',
                controller: 'RegisterCtrl',
                url: '/register'
            })
            .state('dashboard', {
                templateUrl: 'views/dashboard.html',
                controller: 'DashboardCtrl',
                url: '/dashboard'
            });
    }])

    .run(['$rootScope', function($rootScope){
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
            if(!fromState.name){
                console.log('refreshed page');
            }
        });
    }]);
