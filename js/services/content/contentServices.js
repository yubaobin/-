'use strict';

angular.module('app').service('contentServices', ['$timeout', function($timeout) {

    this.show = function(scope, item) {
    	var name = item.name
    	console.log(scope.name);
        $timeout(function() {
            scope[name] = item.show;
        },item.time);
    }
    this.showPage = function(scope, showList) {
        for (var i = 0; i < showList.length; i++) {
            this.show(scope,showList[i]);
        }
    }
}])
