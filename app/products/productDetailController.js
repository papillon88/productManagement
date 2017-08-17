(function () {

    "use strict";

    var app = angular.module("productManagement");

    var productDetailController = function ($scope,product) {

        $scope.product = product;
        console.log(product.productName);

    };

    app.controller("productDetailController",["$scope","product",productDetailController]);
}());