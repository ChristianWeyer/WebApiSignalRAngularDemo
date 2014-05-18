/// <reference path="_references.js" />

describe('Controller: Products List', function () {
    var productsCtrl, scope;

    beforeEach(module('myApp'));

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        productsCtrl = $controller('productsListController', {
            $scope: scope
        });
    }));

    it('should have scope defined', function () {
        expect(scope).toBeDefined();
    });
});
