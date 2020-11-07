var app = angular.module('beamng.apps');
app.directive('custommultiplayerchat', ['UiUnits', function (UiUnits) {
	return {
		templateUrl: 'modules/apps/CustomChat/app.html',
		replace: true,
		restrict: 'EA',
		scope: true
	}
}]);

app.controller("Chat", ['$scope', 'bngApi', function ($scope, bngApi) {

}]);
