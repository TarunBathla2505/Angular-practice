import { Component } from '@angular/core';
import { DemoServiceService } from '../demo-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {
  pname='';
  price:number=0;
  constructor(private dservice: DemoServiceService) {}
  addItem() {
    this.dservice.addProducts(this.pname,this.price);
  }
}
