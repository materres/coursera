(function () {
    'use strict';
    angular.module('MenuApp').component('categoriesList', {
        templateUrl: 'src/menuapp/template/categories-list.template.html',
        bindings: {
            categories: '<'
        }
    });
})();


