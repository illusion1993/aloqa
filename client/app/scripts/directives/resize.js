'use strict';

/**
 * @ngdoc function
 * @name clientApp.directive:resize
 * @description
 * # resize
 * Directive of the clientApp
 */
angular.module('clientApp')
    .directive('resize', function ($window) {
        //return {
        //    link: function (scope, element, attrs) {
        //        var w = angular.element($window);
        //
        //        scope.getHeightAndOffset = function () {
        //            return {'height': w.height(), 'offset': element.offset().top};
        //            //return w.height();
        //        };
        //
        //        //scope.$watch(scope.getHeightAndOffset, function (newValue, oldValue) {
        //        //    scope.style = function () {
        //        //        return {
        //        //            'height': (newValue.height - newValue.offset) + 'px'
        //        //        };
        //        //    };
        //        //});
        //        //w.bind('resize', function () {
        //        //    scope.$apply();
        //        //});
        //
        //        scope.$watch(scope.getHeightAndOffset, function (newValue, oldValue) {
        //            if(newValue !== oldValue){
        //                console.log('changed');
        //            }
        //            else{
        //                console.log('not changed');
        //            }
        //        });
        //        scope.$digest();
        //    }
        //};
        //return {
        //    restrict: 'A',
        //    scope: {
        //        style: '&'
        //    },
        //    link: function (scope, element, attrs) {
        //        var w = angular.element($window);
        //
        //        scope.getHeightAndOffset = function () {
        //            return {'height': w.height(), 'offset': element.offset().top};
        //        };
        //
        //        var myWatch = scope.$watch(scope.getHeightAndOffset, function (newValue, oldValue) {
        //            console.log('watch ran');
        //            scope.style = function () {
        //                return {
        //                    'height': (newValue.height - newValue.offset) + 'px'
        //                };
        //            };
        //
        //        }, true);
        //        myWatch();
        //    }
        //};
        return function (scope, element) {
            var w = angular.element($window);
            scope.getHeightAndOffset = function () {
                return {'height': w.height(), 'offset': element.offset().top};
            };
            scope.$watch(scope.getHeightAndOffset, function (newValue, oldValue) {
                scope.windowHeight = newValue.height;
                scope.elementOffset = newValue.offset;

                scope.style = function () {
                    return {
                        'height': (newValue.height - newValue.offset) + 'px'
                    };
                };

            }, true);

            w.bind('resize', function () {
                scope.$apply();
            });
        }
    });