'use strict';

/**
 *
 */
angular.module('sbAdminApp')
    .controller('rectorOrdersCtrl', function ($scope, $http) {

        $http.get('dataStore/rectorOrders.json').success(function (data) {

            $scope.orders = data;
        });
    });