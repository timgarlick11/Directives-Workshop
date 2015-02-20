var app = angular.module('directiveWorkshop')

app.directive('pending', function($q, mainService) {

return {
	restrict: 'A',
		scope: {
			request: '&',
			add: '@'
		},
	
	// template: '<button class="btn btn-primary" pending request="getSongData()"> Submit </button>',
	
	link: function(scope, elem, attrs) {
		console.log(scope, elem, attrs) // elem had a property on it called disabled. I console.log 'this' found out it pointed to the button so I said this.disabled = true;
		elem.on('click', function(test) {
			console.log(this)
			this.disabled = true;
			console.log(test) // passed in the click event
				
				mainService.getData(scope.query).then(function(results) {
   					
   					test.currentTarget.disabled = false; // followed the path on the click event to see what was happening and set the property equal to false to enable the button again
   					
   			

   			})
   		})
	}
}


})

// + Hide, disable, or change the text of the submit button
// + Show a spinning icon or gif while we wait for our data
// + Hide the spinner when our data returns
// + Reset the submit button to its original condition
// + You may need to use $q and setup some promises
// + Inject $q into the directive not the link function
// + remember scope.request === to the function on the controller.
// + Don't let your controller function start until the "element" is "clicked"
// + Make sure your controller function is returning itself and its promise.
// + This will be difficult, don't give up. Tackle one problem at a time.