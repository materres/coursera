(function (){
    'use strict';
    
    angular.module('public').controller('SignUpController', SignUpController);
    
    SignUpController.$inject = ['NewsletterService'];
    function SignUpController(NewsletterService){
        var signUpCtrl = this;
        
        signUpCtrl.menuItem = {};
        
        signUpCtrl.user = {
            first_name: null,
            last_name: null,
            email: null,
            phone: null,
            menu_number: null,
            completed: false,
            error: false
        };
        
        signUpCtrl.submit = function (){
            signUpCtrl.user.error = false;
            signUpCtrl.user.completed = false;
            signUpCtrl.user.menu_number = signUpCtrl.user.menu_number.toUpperCase();
            var promise = NewsletterService.getMenuItem(signUpCtrl.user.menu_number);
                    
            promise.then(
                function (response){
                    signUpCtrl.menuItem = response.data;
                    signUpCtrl.user.completed = true;
                    
                    NewsletterService.setUser(signUpCtrl.user);
                    NewsletterService.setMenuItem(signUpCtrl.menuItem);
                    
                },
                function (error){
                    signUpCtrl.user.error = true;
                    signUpCtrl.user.completed = true;
                }
            );
        };
    }
})();


