/// <reference path="_references.js" />

describe('Controller: Products List', function () {
    var productsCtrl, scope;

    beforeEach(module('myApp'));

    beforeEach(inject(function () {
        scope = {}; //$rootScope.$new();
    }));

    it('should have a valid scope defined', inject(function ($controller) {
        expect(scope).toBeDefined();

        productsCtrl = $controller('productsListController', {
            $scope: scope
        });
    }));
});
