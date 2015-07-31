var app = angular.module('rtfmApp', ['firebase','ngRoute']);
app.config(function($routeProvider){
	$routeProvider
	.when( '/threads' ,{
		templateUrl:'threads/threads.html',
		controller:'threadsCtrl',
		resolve:{
			threadsRef: function(threadService){
				return threadService.getThreads();

			}
		}
	})
	
	.when('/threads/:threadId',{
		templateUrl:"thread/thread.html",
		controller: "threadCtrl",
		resolve: {
	    	threadRef: function (threadService, $route) {
	      		return threadService.getThread($route.current.params.threadId);
	    	},
		

			commentsRef: function (threadService, $route) {
    			return threadService.getComments($route.current.params.threadId);
  			}
  		}

	})
	.otherwise('/threads');
})

app.constant('fb',{
	url:'https://adrianafirstfirebase.firebaseio.com'
})
