app.controller("NewContactController", function($scope, $location, createContact) {
    $scope.back = function() {
        $location.path("#/");
    }

    $scope.saveContact = function(contact) {
        createContact.createOne(contact)
            .then(function(doc) {
                var contactUrl = "/contact/" + doc._id;
                $location.path(contactUrl);
            }, function(response) {
                alert(response);
            });
    }
})