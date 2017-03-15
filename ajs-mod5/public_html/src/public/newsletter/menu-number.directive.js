(function (){
    'use strict';
    
    angular.module('public').directive('menuNumber', ['NewsletterService', '$q',
        function (NewsletterService, $q){
            return {
                require: 'ngModel',
                link: function(scope, elm, attrs, ctrl){
                    
                    ctrl.$asyncValidators.menuNumber = function (modelValue, viewValue){
                        var promise = NewsletterService.getMenuItem(viewValue.toUpperCase());
                        var deferred = $q.defer();
                        
                        promise.then(
                            function (){
                                deferred.resolve();
                            },
                            function (error){
                                deferred.reject();
                            }
                        );
                        return deferred.promise;
                    };
                }
            };
        }]);
    
})();