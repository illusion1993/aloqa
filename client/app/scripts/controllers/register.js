'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('RegisterCtrl', ['$timeout', '$rootScope', function ($timeout, $rootScope) {
    $timeout(function(){
		$rootScope.$broadcast("pageLoaded");
	}, 500);
  }]);
