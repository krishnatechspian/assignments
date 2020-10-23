import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ProductsService } from './products.service';

describe('ProductsService', () => {
    let service: ProductsService;
    let http: HttpClient;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                { provide: HttpClient, useValue: { get: jest.fn() } },
                ProductsService
            ]
        });
        http = TestBed.inject(HttpClient);
        service = TestBed.inject(ProductsService);

        // Mock implementation of console.error to
        // return undefined to stop printing out to console log during test
        jest.spyOn(console, 'error').mockImplementation(() => undefined);
    });

    it('should create an instance successfully', () => {
        expect(service).toBeDefined();
      });
});
