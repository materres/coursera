(function () {
    'use strict';
    
    angular.module('MenuData')
            .service('MenuDataService', MenuDataService)
            .constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");
    
    MenuDataService.$inject = ['$http','$stateParams','ApiBasePath'];
    function MenuDataService($http, $stateParams, ApiBasePath) {
        var mds = this;
        
        mds.getAllCategories = function () {
            return $http({
                method: "GET",
                url: (ApiBasePath + "/categories.json")
            });
        };
        
        mds.getItemsForCategory = function ($stateParams) {
            var categoryShortName = $stateParams.categoryShortName;
            return $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json"),
                params: {
                    category: categoryShortName
                }
            });
        };
    }
})();


