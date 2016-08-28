'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
    .controller('DashboardCtrl', ['$timeout', '$rootScope', '$scope', function ($timeout, $rootScope, $scope) {
        $scope.config = {
            autoHideScrollbar: true,
            theme: 'minimal-dark',
            advanced:{
                updateOnContentResize: false
            },
            scrollInertia: 100
        };
        $timeout(function () {
            $rootScope.$broadcast("pageLoaded");
        }, 100);
    }]);
