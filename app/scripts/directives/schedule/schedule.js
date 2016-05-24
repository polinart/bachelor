'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbAdminApp')
    .controller('scheduleCtrl', function($scope, $http) {
        $http.get('dataStore/schedule/day.json').success(function (data) {
            $scope.day = data;
        });
        $http.get('dataStore/schedule/week.json').success(function (data) {
            $scope.week = data;
        });
        $http.get('dataStore/schedule/month.json').success(function (data) {
            $scope.month = data;
        });
    })
    .directive('schedule',function() {
        return {
            templateUrl:'scripts/directives/schedule/schedule.html',
            restrict: 'E',
            replace: true,
        }
    });
