import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CarouselService } from 'src/app/services/carousel.service';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss'],
  providers: [CarouselService]
})

export class FrontPageComponent implements OnInit {

  constructor(
    private titleService: Title,
    private carouselService: CarouselService,
    ) { }

  ngOnInit() {
    this.titleService.setTitle("Welcome, please Login");
  }

}
