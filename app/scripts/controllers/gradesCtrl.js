'use strict';

/**
 *
 */
angular.module('sbAdminApp')
    .controller('gradesCtrl', function ($scope, $http) {

        var url = 'dataStore/grade.json';

        getGrades(url, $scope, $http);
    });

function getGrades (url, $scope, $http) {
    $http.get(url).success(function (data) {

        $scope.semesters = data;
    });
}