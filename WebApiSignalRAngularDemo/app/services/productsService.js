myApp.factory("productsService", function ($http) {
    var service = {};

    var connection = $.hubConnection();
    connection.logging = true;

    var hubProxy = connection.createHubProxy("pokeHub");
    
    service.init = function (scope) {
        hubProxy.on("poke", function (data) {
            scope.$broadcast("productsPoke", data);
        });

        connection.start().done(function () {
        });
    }

    service.listProducts = function() {
        return $http.get("/api/products");
    };

    service.loadProductDetails = function (id) {
        return $http.get("/api/products?id=" + id);
    };

    service.pokeAll = function(data) {
        return $http.get("/api/poke?data=" + data);
    };

    return service;
});