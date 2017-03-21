(function () {
    'use strict';
    angular.module('MenuApp').component('itemsList',{
        templateUrl: 'src/menuapp/template/items-list.template.html',
        bindings: {
            items: '<'
        }
    });
})();


