(function (){
    'use strict';
    
    angular.module('public').controller('MyInfoController', MyInfoController);
    
    MyInfoController.$inject = ['NewsletterService', 'ApiPath'];
    function MyInfoController(NewsletterService, ApiPath){
        var myInfoCtrl = this;
        myInfoCtrl.basePath = ApiPath;
        myInfoCtrl.showUp = false;
        myInfoCtrl.user = NewsletterService.getUser();
        if (myInfoCtrl.user === null){
            myInfoCtrl.showUp = true;
        } else {
            myInfoCtrl.menuItem = NewsletterService.getUserMenuItem(myInfoCtrl.user.menu_number);
        }
    }
})();