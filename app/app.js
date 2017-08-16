(function () {
    "use strict";
    var app = angular.module("productManagement", ["common.services", "productResourceMock", "ngRoute"]);

    app.config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "app/welcome.html"
            })
            .when("/products", {
                templateUrl: "app/products/productListView.html",
                controller: "productListController"
            })
            .when("/products/edit/:productId", {
                templateUrl: "app/products/productEditView.html",
                controller: "productEditController"
            })
            .otherwise({
                redirectTo: "/"
        })
    });

}());
