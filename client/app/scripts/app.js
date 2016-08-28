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
        'ngScrollbars'
    ])
    
    .config(['$locationProvider', '$urlRouterProvider', '$stateProvider', 'RestangularProvider', function ($locationProvider, $urlRouterProvider, $stateProvider, RestangularProvider) {
        
        // Using html5Mode to remove hash(#) from URLs
        //$locationProvider.html5Mode(true);

        // API base url for restangular
        RestangularProvider.setBaseUrl('api/');
        
        // Add CSRF Token into restangular request headers
        RestangularProvider.setDefaultHeaders({csrftoken: csrfToken});

        // Api urls must end with a slash(/) to be regarded as api urls instead of webapp urls
        RestangularProvider.setRequestSuffix('\/');
        
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
                    promiseObj:  ['AuthService', function(AuthService){
                        return AuthService.login('user', 'user');
                    }]
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
                url: '/register',
                resolve: {
                    promiseObj:  ['AuthService', function(AuthService){
                        return AuthService.getUser();
                    }]
                }
            })
            .state('dashboard', {
                templateUrl: 'views/dashboard.html',
                controller: 'DashboardCtrl',
                url: '/dashboard'
            });

    }])

    .run(['$rootScope', 'Restangular', '$cookies', function($rootScope, Restangular, cookies){

        Restangular.addFullRequestInterceptor(
            function (element, operation, route, url, headers, query_params, httpConfig) {
                console.log('intercepting');
                console.log(cookies);
                var token = cookies.get('Token');
                var authHeaders;
                if(token) {
                    // There can be a user with no batch
                    authHeaders = {
                        'Authorization': 'Token ' + token
                    };
                }
                // checking, if the auth token cookie is not present and the route is not the login, redirect the current user to the login state
                // if (!token && ($state.current.controller !== "UIStaticsLoginCtrl" &&  !_.find(publicStates, function(n){ return n === $state.current.name; }))) {
                //     var defer = $q.defer();
                //     httpConfig.timeout = defer.promise;
                //     defer.resolve();
                //     logoutService.logout(true);
                // }
                return {
                    headers: headers ? _.extend(headers, authHeaders) : authHeaders,
                    params: query_params,
                    element: element,
                    httpConfig: httpConfig
                };
        });

        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
            if(!fromState.name){
                console.log('refreshed page');
            }
        });

    }]);
