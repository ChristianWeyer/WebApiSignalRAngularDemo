myApp.factory("productsService", function () {
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

    return service;
});