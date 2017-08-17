(function () {

    "use strict";

    var app = angular.module("productManagement");

    var productDetailController = function ($scope) {

        $scope.product = {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2010",
            "description": "15 gallon capacity rolling garden cart",
            "cost": 20.00,
            "price": 32.99,
            "category": "garden",
            "tags": ["barrow", "cart", "wheelbarrow"],
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
        };




    };

    app.controller("productDetailController",["$scope",productDetailController]);
}());