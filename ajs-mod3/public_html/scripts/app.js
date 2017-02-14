(function (){
    'use strict';
    angular.module('NarrowItDownApp',[])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItems);
        
    function FoundItems() {
        var ddo = {
            templateUrl: 'menuList.html',
            scope: {
                items: '<',
                onRemove: '&'
            },
            controller: NarrowItDownDirectiveController,
            controllerAs: 'narrow',
            bindToController: true
        };
        return ddo;
    }
    
    function NarrowItDownDirectiveController() {
        var narrow = this;
    };
    
    NarrowItDownController.$inject = ['$scope', 'MenuSearchService'];
    function NarrowItDownController($scope, MenuSearchService) {
        var narrow = this;
        narrow.found = [];
        $scope.searchTerm = "";
        
        narrow.getMenuItems = function () {
            if($scope.searchTerm !== "") {
                MenuSearchService.getMatchedMenuItems($scope.searchTerm).then(function (response) {
                    narrow.found = response;
                });
            }
        };
        narrow.removeItem = function (index) {
            narrow.found.splice(index, 1);
        };
    }
    
    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {
        var service = this;
        
        service.getAll = function () {
            return $http({
                method: "GET",
                url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
            });
        };
        
        service.getMatchedMenuItems = function (searchTerm) {
            return $http({
                method:"GET",
                url: 'https://davids-restaurant.herokuapp.com/menu_items.json'}).then(
                    function (response) {
                        var values = response.data.menu_items;
                        var foundItems = [];

                        for(var i = 0; i < values.length; i++){
                            var desc = values[i].description;
                            if(desc.toLowerCase().indexOf(searchTerm)!== -1) {
                                foundItems.push(values[i]);
                            }
                        }
                        return foundItems;
                    });
        };
    }
})();


