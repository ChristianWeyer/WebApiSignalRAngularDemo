/// <reference path="_references.js" />

describe('Service: Products Service', function () {
    var productsService,
        httpBackend;

    beforeEach(function () {
        module('myApp');

        inject(function ($httpBackend, _productsService_) {
            productsService = _productsService_;
            httpBackend = $httpBackend;
        });
    });

    afterEach(function () {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    it('should get a list of products and return the response.', function () {
        var returnData = [{ Id: 1, Title: "Super lecker Pudding" }, { Id: 2, Title: "Mjamm-mjamm Gurken" }, { Id: 3, Title: "Mhhhh Salzstangen" }];

        httpBackend.expectGET('/api/products').respond(returnData);
        var returnedPromise = productsService.listProducts();

        var result;
        returnedPromise.then(function (response) {
            result = response;
        });

        httpBackend.flush();

        expect(result).toEqual(returnData);
    });

    it('should get product details by id and return the response.', function () {
        var id = 2;
        var returnData = { Id: 2, Title: "Mjamm-mjamm Gurken", Description: "Yadda yadda yad", Amount: 149 };

        httpBackend.expectGET('/api/products?id=' + id).respond(returnData);
        var returnedPromise = productsService.loadProductDetails(id);

        var result;
        returnedPromise.then(function (response) {
            result = response.data;
        });

        httpBackend.flush();

        expect(result).toEqual(returnData);
    });
});