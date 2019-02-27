import { Injectable } from '@angular/core';

@Injectable()
export class CarouselService {

  private margin: number = 0;

  constructor() { }

  updateMargin(px: number): void {
    this.margin += px;
  }

}
