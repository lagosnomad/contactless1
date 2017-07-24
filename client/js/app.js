//angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.directives','app.services',])
var app = angular.module("contactsApp", ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when("/api/contacts", {
                templateUrl: "list.html",
                controller: "ListController",
                resolve: {
                    contacts: function(getContacts) {
                        return getContacts.getAll();
                    }
                }
            })
            .when("/new/contact", {
                controller: "NewContactController",
                templateUrl: "contact-form.html"
            })
            .when("/api/contact/:contactId", {
                controller: "EditContactController",
                templateUrl: "contact.html"
            })
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