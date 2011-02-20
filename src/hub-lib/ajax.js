/**
 * @license hub.js JavaScript library
 * https://github.com/mantoni/hub.js
 * 
 * Copyright 2011, Maximilian Antoni
 * Released under the MIT license:
 * https://github.com/mantoni/hub.js/raw/master/LICENSE
 */
/**
 * A generic Ajax peer for the Hub.
 */
Hub.peer("lib.ajax", function() {
	
	function newXHR() {
		try {
			return new XMLHttpRequest();
		}
		catch(e) {
			return new ActiveXObject("Microsoft.XMLHTTP");
		}
	}
	
	return {
		
		"request": function(data) {
			var promise = Hub.promise();
			var xhr = newXHR();
			// TODO add headers if configured in data
			// TODO add parameters if configured in data
			xhr.open(data.method || "GET", data.url, true);
			xhr.onreadystatechange = function() {
				if(xhr.readyState === 4) {
					// TODO error handling
					promise.fulfill(xhr);
				}
			};
			xhr.send(null);
		}
	
	};
});
