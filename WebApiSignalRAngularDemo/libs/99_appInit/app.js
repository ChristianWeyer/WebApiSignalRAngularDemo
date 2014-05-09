var myApp = angular.module("myApp", ["ngRoute", "angular-loading-bar"]);

myApp.config(function ($routeProvider) {
    $routeProvider
        .when("/", { templateUrl: "app/products/products.html" })
        .when("/products", { templateUrl: "app/products/products.html" })
        .when("/login", { templateUrl: "app/login/login.html" })
        .otherwise({ redirectTo: "/" });
});

myApp.run(function () {

});
