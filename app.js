(function(){
    'use strict';
    angular.module('NameCalculator',[])
    .controller("NameCalculatorController", function($scope) {
        $scope.name = "";
        $scope.totVal = 0;
        $scope.displayLength = function(event){
            var code = event.keyCode;
            if (code >= 65 && code <= 90) {
                $scope.totVal += 1;
            } else if (code == 8 || code == 46){
                if ($scope.name.length < $scope.totVal) {
                    $scope.totVal -= 1;
                }
            }
            $scope.keyCod = code;
        };
    });
})();