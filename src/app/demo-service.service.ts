import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DemoServiceService {
  constructor() {}
  products = ['handwash', 'soap', 'shampoo', 'bodywash'];
  productPrices = new Map([
    ['handwash', 30],
    ['soap', 43],
    ['shampoo', 67],
    ['bodywash', 87],
  ]);
  sum = 227;
  hasProduct(product: string) {
    return this.products.includes(product);
  }
  getProducts() {
    console.log(this.products);
    return this.products;
  }
  getSum(){
    console.log(this.sum);
    return this.sum;
  }
  addProducts(product: string, price: number) {
    this.products.push(product);
    this.productPrices.set(product, price);
    this.sum += price;
  }
  deleteProduct(product: string) {
    console.log('here');
    this.products.splice(this.products.indexOf(product), 1);
    this.sum -= this.productPrices.get(product)!;
    this.productPrices.delete(product);
  }
}
