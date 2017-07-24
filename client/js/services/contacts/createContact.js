app.factory('createContact', function($http, $q) {
    return {
        createOne: function(contact) {
            var deferred = $q.defer();
            $http.post('/api/contacts', contact)
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