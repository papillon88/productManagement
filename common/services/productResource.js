

(function(){
    "use strict";

    var app = angular.module("common.services");

    var productResource = function ($resource) {
        return $resource("/api/products");
    };

    app.factory("productResource",["$resource",productResource]);

}());