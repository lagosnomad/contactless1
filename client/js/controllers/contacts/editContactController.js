app.controller("EditContactController", function($scope, $routeParams, getContact, editContact, deleteContact) {
    getContact.getOne($routeParams.contactId)
        .then(function(contact) {
            $scope.contact = contact;
        }, function(response) {
            alert(response);
        });

    $scope.toggleEdit = function() {
        $scope.editMode = true;
        $scope.contactFormUrl = "contact-form.html";
    }

    $scope.back = function() {
        $scope.editMode = false;
        $scope.contactFormUrl = "";
    }

    $scope.saveContact = function(contact) {
        editContact.editOne(contact);
        $scope.editMode = false;
        $scope.contactFormUrl = "";
    }

    $scope.deleteContact = function(contactId) {
        deleteContact.deleteOne(contactId);
    }
});