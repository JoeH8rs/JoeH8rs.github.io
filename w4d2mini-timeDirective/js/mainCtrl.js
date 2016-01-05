angular.module('timeApp')
    .controller('mainCtrl', ['$scope', function ($scope) {
        $scope.name = "Joe";
        $scope.format = 'h:mm:ss a';
    }]);


