(function () {
'use strict';

angular.module('LunchCheck', []).controller('LuchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController ($scope) {
    $scope.lunch = "";
    $scope.message = "";

    $scope.lunchCount = function () {
        var arrayofStrings = $scope.lunch.split(',');
        var count = 0;
        
        if(arrayofStrings.length === 1) {
            if(!checkWord($scope.lunch)){
                $scope.message = "Please enter the data first.";
            }
        }
        else {
            for(var i = 0; i < arrayofStrings.length; i++) {
                if(checkWord(arrayofStrings[i])) {
                    count++;
                }
                console.log("Word:" + arrayofStrings[i]);
                console.log(count);
            }
//            if(arrayofStrings.length <= 3){
            if(count <= 3){
                $scope.message = "Enjoy!";
            }
            else {
//                if(arrayofStrings.length > 3) {
                if(count > 3) {
                    $scope.message = "Too much!";
                }
            }
        }  
    };
}
function checkWord(string) {
    var re = /\s{1,}/;
    var empty = string.match(re);
    var word = string.match(/(\s?\w{1,}){1,}/);
    var isWord = false;
    
    if((string === "") || (empty === null)){
        isWord = false;
    }
    else {
        if(word !== null) {
            isWord = true;
        } 
    }
    return isWord;
}
})();
