angular.module('contactsRoutes', ['ngRoute'])
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
            .when("/api/new/contact", {
                controller: "NewContactController",
                templateUrl: "contact-form.html"
            })
            .when("/api/contact/:contactId", {
                controller: "EditContactController",
                templateUrl: "contact.html"
            })

    });