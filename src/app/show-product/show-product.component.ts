import { Component } from '@angular/core';
import { DemoServiceService } from '../demo-service.service';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrl: './show-product.component.css',
})
export class ShowProductComponent {
  products: any;
  price:number;

  constructor(dservice: DemoServiceService){
    this.products = dservice.getProducts();
    this.price = dservice.getSum();
  }
}
