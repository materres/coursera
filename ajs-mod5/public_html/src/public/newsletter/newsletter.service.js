(function (){
    'use strict';
    
    angular.module('public').service('NewsletterService', NewsletterService);
    
    NewsletterService.$inject = ['$http','ApiPath'];
    function NewsletterService($http, ApiPath){
        var service = this;
        service.menuItem = {};
        
        service.setUser = function (user){
            service.user = user;
        };
        
        service.getUser = function (){
            if(service.user === undefined){
                return null;
            }
            return service.user;
        };
        
        service.setMenuItem = function (menuItem){
            service.menuItem = menuItem;
        };
        
        service.getUserMenuItem = function (menuNumber){
            if (service.menuItem !== undefined) {
                if (service.user.menu_number === menuNumber) {
                    return service.menuItem;
                }
            }
            return null;
        };
        
        service.getMenuItem = function (shortName){
            return $http.get(ApiPath + '/menu_items/' + shortName +'.json');
        };
        
    }
})();

