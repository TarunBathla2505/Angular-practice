import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  cources = [
    {
      code: '121',
      name: 'spring boot',
      fee: 5000,
      duration: '1 month',
    },
    {
      code: '125',
      name: 'spring ',
      fee: 5000,
      duration: '1 month',
    },
    {
      code: '129',
      name: 'hibernate',
      fee: 5000,
      duration: '1 month',
    },
  ];
  constructor() {}
  getCources() {
    return this.cources;
  }
}
