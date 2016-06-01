'use strict';

/**
 * get Contracts
 */
angular.module('sbAdminApp')
    .controller('profileCtrl', function ($scope, $http) {

        var url = 'dataStore/profile.json';

        getProfile(url, $scope, $http);

    });

function getProfile (url, $scope, $http) {
    $http.get(url).success(function (data) {
        $scope.user = data;
    });
}