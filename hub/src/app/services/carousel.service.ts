import { Injectable } from '@angular/core';

@Injectable()
export class CarouselService {

  test: string;

  constructor() { }

  setTest(to: string): void {
    this.test = to;
  }
}
