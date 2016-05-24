'use strict';

/**
 *
 */
angular.module('sbAdminApp')
    .controller('gradesCtrl', function ($scope, $http) {

        $http.get('dataStore/grade.json').success(function (data) {

            $scope.semesters = data;
        });
    });