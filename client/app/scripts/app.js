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
                url: '/login'
            })
    }]);
