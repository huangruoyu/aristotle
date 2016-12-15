'use strict';

(function(){
	var app = angular.module('aristotle', ['angular-websocket']);
	
	app.factory('MyData', function($websocket) {
	      // Open a WebSocket connection
	      var dataStream = $websocket('ws://localhost:9000/chat');

	      var collection = [];

	      dataStream.onMessage(function(message) {
	        collection.push(JSON.parse(message.data));
	      });

	      var methods = {
	        collection: collection,
	        send: function(msg) {
	          dataStream.send(JSON.stringify({ content: msg }));
	        }
	      };

	      return methods;
	    });
	
})();