var App = angular.module('myApp', ['iso.directives'])

    .controller('twubricController', function($scope, $http) {
        $scope.from = '05/02/2010';
        $scope.to = '05/04/2015';
        
        $http.get('http://localhost/twubric/twubric_values.json')
        .then(function(res){
            $scope.xList = res.data;                
        });

        $scope.deleteItem = function (index) {
            $scope.xList.splice(index, 1);
        }

        Mousetrap.bind('u', function() {
            $('#unsort-button').click();
        });
        Mousetrap.bind('t', function() {
            $('#total-sort-button').click();
        });
        Mousetrap.bind('f', function() {
            $('#friends-sort-button').click();
        });
        Mousetrap.bind('i', function() {
            $('#influence-sort-button').click();
        });
        Mousetrap.bind('c', function() {
            $('#chirpiness-sort-button').click();
        });
    })
    



