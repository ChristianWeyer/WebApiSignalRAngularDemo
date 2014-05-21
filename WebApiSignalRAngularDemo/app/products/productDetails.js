myApp.controller("productDetailsController", function($scope, productsService, $location, $routeParams) {
    var id = $routeParams.id;

    productsService.loadProductDetails(id).then(function (result) {
        $scope.product = result.data;
    }, function (error) {
        alert(JSON.stringify(error));
    });
});