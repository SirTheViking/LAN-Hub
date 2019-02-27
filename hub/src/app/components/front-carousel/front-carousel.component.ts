import { Component, OnInit } from '@angular/core';
import { CarouselService } from 'src/app/services/carousel.service';

@Component({
  selector: 'app-front-carousel',
  templateUrl: './front-carousel.component.html',
  styleUrls: ['./front-carousel.component.scss']
})

export class FrontCarouselComponent implements OnInit {

  constructor(private carouselService: CarouselService) { }

  ngOnInit() { }

}
