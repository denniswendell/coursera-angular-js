(function() {
	'use strict'

	angular.module('LunchCheck', [])

	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController($scope) {

		/** main function that checks the input text for lunch menu items */
		$scope.lunchCheck = function() {
			var numberOfMenuItems = getNumberOfItemsInCommaDelimitedString($scope.menuItems)
			console.log("Number of menu items is '%s'", numberOfMenuItems)
			if (numberOfMenuItems == 0) {
				$scope.message = "Please enter data first"
			} else if (numberOfMenuItems <= 3) {
				$scope.message = "Enjoy!"
			} else {
				$scope.message = "Too much!"
			}
		};

		/** utility method to tokenize text area */
		function getNumberOfItemsInCommaDelimitedString(string) {
			if (string == undefined) return 0
			var itemsArray = string.split(',')
			return removeEmptyItemsFromArray(itemsArray)
		}

		/** utility method to count the items on the lunch menu, considers empty items */
		function removeEmptyItemsFromArray(array) {
			var cleanArray = []
			angular.forEach(array, function(item) {
				if (item && item.trim()) cleanArray.push(item)
			})
			return cleanArray.length
		}
	};

})();
