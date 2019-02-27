import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FrontService {

  private test: string;

  constructor() { }

  setTest(to: string): void {
    this.test = to;
  }

  getTest(): string {
    return this.test;
  }
}
