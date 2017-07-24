//angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.directives','app.services',])
var app = angular.module("contactsApp", ['ngRoute', 'contactsRoutes'])
    .config(function($routeProvider) {
        $routeProvider
            .when("/docs", {
                templateUrl: "docs.html"
            })
            .when("/pricing", {
                templateUrl: "pricing.html"
            })
            .otherwise({
                redirectTo: "/api/contacts"
            })
    })