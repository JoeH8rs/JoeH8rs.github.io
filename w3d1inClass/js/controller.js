angular.module('myApp').controller('mainControl',
    function ($scope, $timeout) {


        $scope.name = "Joe";

        $scope.something = "yes you can";

        $timeout(function () {
            $scope.something = "What are you waiting for!";
        }, 3000);

        $scope.crew = [
            { name: "Joe", title: "Dad", Age: 49 },
            { name: "Lolo", title: "Mom", Age: 39 },
            { name: "Levi", title: "Baby", Age: 1 },
            { name: "Simon", title: "Son", Age: 19},
            { name: "Sammy", title: "Dog", Age: 6 }

        ];
        
        $scope.isAwesome = true;
        
        
        $scope.btnClicked = function(){
            $scope.isAwesome = !$scope.isAwesome;
        };
	});