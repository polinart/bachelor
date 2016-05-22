'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbAdminApp')
    .directive('schedule',function() {
        return {
            templateUrl:'scripts/directives/schedule/schedule.html',
            restrict: 'E',
            replace: true,
        }
    });
