app.directive('genDir', function(){
    return {
        templateUrl: "js/genDir/text.html",
        restrict: "EAC",
        controller: "genCtrl",
        link: function (scope, element, attr) {
            console.log(element[0].parentElement)
        },
        scope: {
            name: "=",       // two way binding
            stringText: "@", // strin binding
            callBack: "&"    //expression evaluation often a function
            
        }

    };
});
  