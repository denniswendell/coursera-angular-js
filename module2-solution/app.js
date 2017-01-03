(function() {
	'use strict'

	angular.module('ShoppingListCheckOff', [])
		.controller('ToBuyController', ToBuyController)
		.controller('AlreadyBoughtController', AlreadyBoughtController)
		.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	ToBuyController.$inject = ['ShoppingListCheckOffService'];

	function ToBuyController(ShoppingListCheckOffService) {
		var toBuyList = this;

		toBuyList.items = ShoppingListCheckOffService.getToBuyList();

		toBuyList.markItemAsBought = function(index) {
			ShoppingListCheckOffService.markToBuyItemAsBought(index);
		}
	}

	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

	function AlreadyBoughtController(ShoppingListCheckOffService) {
		var alreadyBoughtList = this;

		alreadyBoughtList.items = ShoppingListCheckOffService.getAlreadyBoughtList();
	}

	function ShoppingListCheckOffService() {
		var service = this;
		var toBuyList = [{
			itemName: "cookies",
			quantity: 10
		}, {
			itemName: "chips",
			quantity: 5
		}];
		var alreadyBoughtList = [];

		service.markToBuyItemAsBought = function(index) {
			console.log("Removing item at index ", index);
			var item = toBuyList[index];
			removeItemFromBuyList(index);
			addItemToAlreadyBoughtList(item);
		}

		service.getToBuyList = function() {
			return toBuyList;
		}

		service.getAlreadyBoughtList = function() {
			return alreadyBoughtList;
		}

		// service.addItemToAlreadyBoughtList = function(itemName, quantity) {
		// 	var item = {
		// 		name: itemName,
		// 		quantity: quantity
		// 	};
		// 	alreadyBoughtList.push(item);
		// }

		function removeItemFromBuyList(index) {
			toBuyList.splice(index, 1);
		}

		function addItemToAlreadyBoughtList(item) {
			alreadyBoughtList.push(item);
		}
	}

})();
