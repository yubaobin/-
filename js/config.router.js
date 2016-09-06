'use strict';

/**
 * Config for the router
 */
angular.module('app')
    .run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;

        $rootScope.version = version2;

        $rootScope.$stateParams = $stateParams;
    }])
    .config(['$stateProvider', '$urlRouterProvider', 'JQ_CONFIG', '$sceDelegateProvider', '$compileProvider', function ($stateProvider, $urlRouterProvider, JQ_CONFIG, $sceDelegateProvider, $compileProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
            'self',
            'http://img.art500.cn/**']);

        $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|javascript|content|data):/);

        $urlRouterProvider
            .otherwise('/ybb/index');
        $stateProvider
            .state('ybb', {
                abstract: true,
                url: '/ybb',
                templateUrl: './tpl/header.html'
            })
            .state('ybb.index', {
                url: '/index',
                templateUrl: './tpl/body.html',
                resolve: {
                    deps: ['uiLoad',
                        function (uiLoad) {
                            return uiLoad.load(['js/controllers/content/contentCtroller.js']);
                        }]
                }
            })

    }]);