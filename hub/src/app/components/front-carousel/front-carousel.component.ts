import { Component, OnInit } from '@angular/core';
import { FrontService } from 'src/app/services/front.service';

@Component({
  selector: 'app-front-carousel',
  templateUrl: './front-carousel.component.html',
  styleUrls: ['./front-carousel.component.scss']
})
export class FrontCarouselComponent implements OnInit {

  constructor(private frontService: FrontService) { }

  ngOnInit() {
    console.log("testing: " + this.frontService.getTest());
    console.log("Setting test: " + this.frontService.setTest("Magic"));
    console.log("testing: " + this.frontService.getTest());
  }

  setService(): void {
    console.log("Setting test");
    this.frontService.setTest(Math.random().toString());
  }

}
