'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:LoaderCtrl
 * @description
 * # LoaderCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
	.controller('LoaderCtrl', ['$scope', function ($scope) {
		$scope.isHidden = false;
		$scope.$on('pageLoaded', function() {
			$scope.isHidden = true;
		});
	}]);
