app.factory('editContact', function($http, $q) {
    return {
        editOne: function(contact) {
            var deferred = $q.defer();
            var url = "/api/contacts/" + contact._id;
            $http.put(url, contact)
                .success(function(data) {
                    deferred.resolve(data);
                })
                .error(function(msg, code) {
                    deferred.reject(msg);
                    console.log(msg, code);
                });
            return deferred.promise;
        }
    }
})