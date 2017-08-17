(function () {
    "use strict";
    var app = angular.module("productManagement", ["common.services", "productResourceMock", "ui.router"]);

    app.config(["$stateProvider",
        function ($stateProvider) {
        $stateProvider
            .state("welcome", {
                url:"/",
                templateUrl: "app/welcome.html"
            })
            .state("productList", {
                url:"/products",
                templateUrl: "app/products/productListView.html",
                controller: "productListController"
            })
            .state("productEdit", {
                url: "/products/edit/:productId",
                templateUrl: "app/products/productEditView.html",
                controller: "productEditController"
            })
            .state("productDetail", {
                url: "/products/:productId",
                templateUrl: "app/products/productDetailView.html",
                controller: "productDetailController",
                resolve: {
                    productResource: "productResource",
                    product: function (productResource, $stateParams) {
                        var productId = $stateParams.productId;
                        return productResource.get({ productId: productId }).$promise;
                    }
                }
            })
    }]);

}());
