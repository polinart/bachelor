'use strict';

/**
 * get Contracts
 */
angular.module('sbAdminApp')
    .controller('contractsListCtrl', function ($scope, $http) {

   $http.get('dataStore/contracts.json').success(function(data) {
       $scope.contracts = data;
   });

});
