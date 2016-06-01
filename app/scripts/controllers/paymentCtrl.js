'use strict';

/**
 *
 */
angular.module('sbAdminApp')
    .controller('paymentCtrl', function ($scope, $http) {

        var url = 'dataStore/payments.json';

        getPayments(url, $scope, $http);

    });

function getPayments (url, $scope, $http) {
    $http.get(url).success(function (data) {
        $scope.payments = data;
    });
}