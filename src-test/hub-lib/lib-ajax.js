/*
 * Test cases for hub-lib/ajax.js
 */
AsyncTestCase("lib-ajax", {
	
	tearDown: function() {
		Hub.reset();
	},
	
	testAjax: function(queue) {
		queue.call(function(pool) {
			var test = pool.add(function(response) {
				assertEquals(200, response.status);
			});
			Hub.publish("lib.ajax", "request", {
				url: "/heartbeat"
			}).then(test);
		});
	}

});