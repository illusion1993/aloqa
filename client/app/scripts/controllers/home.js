'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
	.controller('HomeCtrl', ['$scope', '$rootScope', '$timeout', '$state', function ($scope, $rootScope, $timeout, $state) {

		$scope.login = function(){
			$state.go('login');
		}

		$timeout(function(){
			$rootScope.$broadcast("pageLoaded");
		}, 1000);
	}]);
