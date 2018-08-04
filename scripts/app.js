var App = angular.module('myApp', [])

    .controller('twubricController', function($scope, $http) {
        $scope.from = '05/02/2010';
        $scope.to = '05/04/2015';
        
        $http.get('http://localhost/twubric/twubric_values.json')
            .then(function(res){
                $scope.xList = res.data;                
            });

            $scope.propertyName = 'uid';
            $scope.reverse = false;
            $scope.sortBy = function(propertyName) {
                $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
                $scope.propertyName = propertyName;
            };
            $scope.deleteItem = function (index) {
                $scope.xList.splice(index, 1);
            }
    })
    



