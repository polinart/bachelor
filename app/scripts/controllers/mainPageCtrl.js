'use strict';
/**
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('MainCtrl', function($scope,$position) {
        var url = 'dataStore/mainPage.json';

        getNews(url, $scope, $http);
  });

function getNews (url, $scope, $http) {
    $http.get(url).success(function (data) {

        $scope.news = data;
    });
}
