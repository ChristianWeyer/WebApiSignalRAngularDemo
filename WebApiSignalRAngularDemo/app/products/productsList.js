myApp.controller("productsListController", function($scope, productsService, $location) {
    productsService.init($scope);

    $scope.$on("productsPoke", function(evt, data) {
        $scope.$apply(function() {
            $scope.pokedData = data;
        });
    });

    productsService.listProducts().then(function(result) {
        $scope.products = result.data;
    }, function(error) {
        alert(JSON.stringify(error));
    });

    $scope.loadDetails = function(product) {
        $location.path("/product/" + product.Id);
    };

    $scope.pokeAll = function() {
        productsService.pokeAll($scope.dataToPoke);
    };
});
