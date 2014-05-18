var myApp = angular.module("myApp", ["ngRoute", "angular-loading-bar"]);

myApp.config(function ($routeProvider) {
    $routeProvider
        .when("/", { templateUrl: "app/products/products.html", controller: "productsListController" })
        .when("/products", { templateUrl: "app/products/products.html", controller: "productsListController" })
        .when("/product/:id", { templateUrl: "app/products/product.html", controller: "productDetailsController" })
        .when("/login", { templateUrl: "app/login/login.html" })
        .otherwise({ redirectTo: "/" });
});

myApp.run(function () {

});
