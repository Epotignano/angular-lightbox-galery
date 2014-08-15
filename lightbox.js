(function(){

	/*var lightBoxCtrl = function($scope, $element, $attrs, $transclude, $document) {

		var lightBox = this;
		//overlay template
		lightBox.$show = function(src) {
			show(src);
		};

	};*/

	var lightBoxCtrl = function($window) {

		//var lightBox = '<div ng-controller="lightBoxCtrl" class="emiliano-lightbox" ng-show="show"><div id="emiliano-lightbox-overlay" ng-click="$openLightbox()"></div><div class="emiliano-lightbox-container"><div class="emiliano-lightbox-container-img">El lightbox de tus sueños</div></div></div>'
		var bodyElement = angular.element($window.document.body);

		this.openLightBox = function() {
			bodyElement.append(lightBox);
		}

		this.closeLightBox = function() {
			$document.remove()
		}
	}

	var lightBoxProvider = function() {
		/*Define custom configuration here */

		this.defaults {
			template: 'lightbox-overlay.tpl.html',
		}
	}


	angular.module('lightBoxModule',[])
		.controller('lightBoxCtrl', lightBoxCtrl)
		//It is a provider because must be configured with any complex configuration that we want before be instantiated
		.provider('lightBoxFactory', lightBoxFactory)
		.directive('lightbox', ['$document', function($document){
			// Runs during compile
			return {
				// name: '',
				// priority: 1,
				// terminal: true,
				 scope: {
				 	show : '=',
				 	images : '='
				 }, // {} = isolate, true = child, false/undefined = no change
				controller: lightBoxCtrl,
				// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
				restrict: 'EA', // E = Element, A = Attribute, C = Class, M = Comment
				templateUrl: 'ceibo_components/lightbox/lightbox.tpl.html',
				// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
				link: function(scope, element, attrs, lightBoxCtrl) {
					scope.$openLightbox = function(){
						lightBoxCtrl.openLightBox();
					}

					scope.$closeLightBox = function() {

					}
				}
			};
		}])

		



})()




