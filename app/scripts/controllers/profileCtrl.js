'use strict';

/**
 * get Contracts
 */
angular.module('sbAdminApp')
    .controller('profileCtrl', function ($scope, $http) {

        $http.get('dataStore/profile.json').success(function (data) {
            $scope.user = data;
        });

    });