

(function(){
    "use strict";
    var app = angular.module("productManagement");

    var productListController = function ($scope,productResource) {
        /*$scope.products = [
            {
                "productId": 1,
                "productName": "Leaf Rake",
                "productCode": "GDN-0011",
                "releaseDate": "March 20, 2009",
                "description": "Leaf rake with 48-inch handle.",
                "cost": 9.00,
                "price": 19.95,
                "category": "garden",
                "tags": [ "leaf", "tool" ],
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
            },
            {
                "productId": 5,
                "productName": "Hammer",
                "productCode": "TBX-0048",
                "releaseDate": "May 21, 2013",
                "description": "Curved claw steel hammer",
                "cost": 1.00,
                "price": 8.99,
                "category": "toolbox",
                "tags": ["tool"],
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
            }
        ];*/



        $scope.showImage = false;

        $scope.toggleImage = function(){
            $scope.showImage = !$scope.showImage;
        };

        productResource.query(function (data) {
            $scope.products = data;
        });

    };

    app.controller("productListController",["$scope","productResource",productListController]);

}());