'use strict';

/**
 *
 */
angular.module('sbAdminApp')
    .controller('documentsCtrl', function ($scope, $http) {

        $http.get('dataStore/documents.json').success(function (data) {
            $scope.documents = data;
        });

    });