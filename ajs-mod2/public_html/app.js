(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;
    
    toBuy.items = ShoppingListCheckOffService.getToBuyItems();
    
    toBuy.buyButton = function (index) {
        ShoppingListCheckOffService.buyAction(index);
    };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBought = this;
    
    alreadyBought.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
}


function ShoppingListCheckOffService() {
    var service = this; 

  // List of shopping items
    var toBuyItems = [{name: "cookies",
                quantity: 5},
               {name: "coke",
                quantity: 3},
               {name: "chips",
                quantity: 10},
               {name: "apple",
                quantity: 2},
               {name: "orange",
                quantity: 8}];
            
    var alreadyBoughtItems = [];

    service.getToBuyItems = function () {
      return toBuyItems;
    };
    
    service.getAlreadyBoughtItems = function () {
        return alreadyBoughtItems;
    };
    
    service.buyAction = function (index) {
        alreadyBoughtItems.push(toBuyItems[index]);
        toBuyItems.splice(index, 1);
    }
}
})();
