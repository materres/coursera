(function () {
    'use strict';
    angular.module('MenuApp').controller('ItemsController', ItemsController);

    ItemsController.$inject = ['items'];
    function ItemsController(items) {
        var itemsCtrl = this;
        itemsCtrl.category = items.data.category;
        itemsCtrl.menu = items.data.menu_items;
    }
})();


