var app =
    angular.module('app')
    .config(
        ['$controllerProvider', '$compileProvider', '$filterProvider', '$provide', '$httpProvider',
            function($controllerProvider, $compileProvider, $filterProvider, $provide, $httpProvider) {

                // lazy controller, directive and service
                app.controller = $controllerProvider.register;
                app.directive = $compileProvider.directive;
                app.filter = $filterProvider.register;
                app.factory = $provide.factory;
                app.service = $provide.service;
                app.constant = $provide.constant;
                app.value = $provide.value;

                $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=utf-8";
                $httpProvider.defaults.transformRequest.unshift(function(data, headersGetter) {
                    var key, result = [];
                    for (key in data) {
                        if (data.hasOwnProperty(key)) {
                            result.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]));
                        }
                    }
                    return result.join("&");
                });

            }
        ])
