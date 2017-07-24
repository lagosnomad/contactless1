app.factory('getContacts', function($http, $q) {
    return {
        getAll: function() {
            var deferred = $q.defer();
            $http.get('/api/contacts')
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