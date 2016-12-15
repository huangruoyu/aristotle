(function(){
	var app = angular.module('aristotle');
	
	app.controller('chatController', ['$scope', 'MyData', function($scope, MyData){
		$scope.messages = MyData.collection;
		$scope.newMessage = "";
		$scope.send = function(){
			MyData.send($scope.newMessage)
			$scope.newMessage = ""
		}

	}]);
})();