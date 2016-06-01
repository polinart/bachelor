'use strict';

/**
 * get Contracts
 */
angular.module('sbAdminApp')
    .controller('contractsListCtrl', function ($scope, $http) {

    var url = 'dataStore/contracts.json';

   getContracts(url, $scope, $http);

});

function getContracts (url, $scope, $http) {
    $http.get(url).success(function(data) {
        $scope.contracts = data;
    });
}
