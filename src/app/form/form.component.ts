import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  submitData(userFormValue: any) {
    console.log(userFormValue);
  }
  uname: string = '';
  age: number = 0;
}
