import { Component } from '@angular/core';
import { DemoServiceService } from '../demo-service.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrl: './delete-product.component.css',
})
export class DeleteProductComponent {
  constructor(private dservice: DemoServiceService) {}
  deleteItem(event: any) {
    if (event.key === 'Enter') {
      if (this.dservice.hasProduct(event.target.value)) {
        this.dservice.deleteProduct(event.target.value);
      } else {
        console.log('no such element present');
      }
      event.target.value = '';
    }
  }
}
