app.factory('deleteContact', function($http, $q) {
    return {
        deleteOne: function(contactId) {
            var deferred = $q.defer();
            var url = "/api/contacts/" + contactId;
            $http.delete(url)
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