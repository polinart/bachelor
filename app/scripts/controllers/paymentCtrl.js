'use strict';

/**
 *
 */
angular.module('sbAdminApp')
    .controller('paymentCtrl', function ($scope, $http) {

        $http.get('dataStore/payments.json').success(function (data) {
            $scope.payments = data;
        });
    });