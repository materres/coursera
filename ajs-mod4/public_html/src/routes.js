(function () {
    'use strict';
    
    angular.module('MenuApp').config(RoutesConfig);
    
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'src/menuapp/template/home.template.html'
            })
                
            .state('categories', {
                url: '/categories',
                templateUrl: 'src/menuapp/template/categories.template.html',
                controller: 'CategoriesController as catiesCtrl',
                resolve: {
                    categories: ['MenuDataService', 
                        function (MenuDataService) {
                            var catList = MenuDataService.getAllCategories();
                            catList.then(function (response) {
                                catList = response.data;
                            });
                            return catList;
                    }]
                }
            })
            
            .state('categories.items', {
                url: '/{categoryShortName}',
                templateUrl: 'src/menuapp/template/items.template.html',
                controller: 'ItemsController as itemsCtrl',
                resolve: {
                    items: ['MenuDataService','$stateParams',
                        function (MenuDataService, $stateParams) {
                            var itemsList = MenuDataService.getItemsForCategory($stateParams);
                            itemsList.then( function (response) {
                                itemsList = response.data;
                            });
                            return itemsList;
                    }]
                }
            });
    }
})();


