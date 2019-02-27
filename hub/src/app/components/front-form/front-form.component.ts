import { Component, OnInit } from '@angular/core';
import { CarouselService } from 'src/app/services/carousel.service';

@Component({
  selector: 'app-front-form',
  templateUrl: './front-form.component.html',
  styleUrls: ['./front-form.component.scss']
})

export class FrontFormComponent implements OnInit {

  constructor(private carouselService: CarouselService) { }

  ngOnInit() {
  }

  setService(): void {
    this.carouselService.setTest(Math.random().toString());
  }

}
