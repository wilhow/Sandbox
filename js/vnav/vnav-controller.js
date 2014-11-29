
intrellise.controller("VNavCtrl",function($scope,$element,$attrs){
	
	this.init = function(element) {
			console.log("init element: ");
			self.$element = element;
		    };

	$scope.buidMenu = function(element){
		console.log("building menu");
	}

	})//end of controller


intrellise.directive("vnav",function(){
	return {
	  restrict: "E",
	  controller: "VNavCtrl",
	  link: function(scope,element,attrs,vnavCtrl){
		  vnavCtrl.init(element,attrs);
		}
	};
})
