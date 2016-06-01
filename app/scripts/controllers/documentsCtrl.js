'use strict';

/**
 *
 */
angular.module('sbAdminApp')
    .controller('documentsCtrl', function ($scope, $http) {

        var url = 'dataStore/documents.json';

        getDocuments(url, $scope, $http);

    });

function getDocuments (url, $scope, $http) {
    $http.get(url).success(function (data) {
        $scope.documents = data;
    });
}