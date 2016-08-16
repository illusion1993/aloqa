'use strict';

/**
 * @ngdoc function
 * @name clientApp.service:AuthService
 * @description
 * # AuthService
 * Service of the clientApp
 */
angular.module('clientApp')
	.service('AuthService', ['Restangular', '$rootScope', '$cookies', function (Restangular, $rootScope, cookies) {

		var baseAuth = Restangular.all('auth');

		this.login = function(username, password){
			
			baseAuth.one('login').post('', {username: username, password: password})
			
			.then(
				function(response){
					cookies.put('Token', response.plain().key);
					return true;
				},
				function(response){
					return true;
				}
			);
		
		};

		this.getUser = function(){
			
			baseAuth.one('user').get()
			
			.then(
				function(response){
					return true;
				},
				function(response){
					return true;
				}
			);
		
		};

	}]);
