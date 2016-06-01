'use strict';

/**
 *
 */
angular.module('sbAdminApp')
    .controller('rectorOrdersCtrl', function ($scope, $http) {

        var url = 'dataStore/rectorOrders.json';

        getOrders(url, $scope, $http);
    });

function getOrders (url, $scope, $http) {
    $http.get(url).success(function (data) {

        $scope.orders = data;
    });
}