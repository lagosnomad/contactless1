app.factory('getContact', function($http, $q) {
    return {
        getOne: function(contactId) {
            var deferred = $q.defer();
            var url = "/api/contacts/" + contactId;
            $http.get(url)
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