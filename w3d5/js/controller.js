angular.module('myApp').controller('mainControl',
    function ($scope, myService) {
        $scope.name = myService.saySomething;
        $scope.living = myService.living;
      
        $scope.getUsers = myService.getUsers;

    });