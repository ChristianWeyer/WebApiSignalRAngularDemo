myApp.controller("productsList", function($scope, $http, productsService) {
    //productsService.init($scope);

    //var products = [
    //    { Id: 1, Title: "Viedell Wassa", Description: "Very legga whahda", Amount: 14 },
    //    { Id: 2, Title: "Schio Dschibbs", Description: "Guad abba ungsunnd", Amount: 9 },
    //    { Id: 3, Title: "Schogglaad leid", Description: "Schmeggt e bissl komisch - abba naja", Amount: 249 }];


    $http.get("/api/products").then(function(result) {
        $scope.products = result.data;
    }, function (error) {
        alert(JSON.stringify(error));
    });

    
});