/*
 * Test cases for hub-lib/ajax.js
 */
AsyncTestCase("hub-lib/ajax", {
	
	tearDown: function() {
		Hub.reset();
	},
	
	testAjax: function(queue) {
		queue.call(function(pool) {
			var test = pool.add(function(response) {
				assertEquals(200, response.status);
			});
			Hub.publish("hub.lib.ajax", "request", {
				url: "/heartbeat"
			}).then(test);
		});
	}

});