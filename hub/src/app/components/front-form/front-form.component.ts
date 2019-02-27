import { Component, OnInit } from '@angular/core';
import { FrontService } from 'src/app/services/front.service';

@Component({
  selector: 'app-front-form',
  templateUrl: './front-form.component.html',
  styleUrls: ['./front-form.component.scss']
})
export class FrontFormComponent implements OnInit {

  constructor(private frontService: FrontService) { }

  ngOnInit() {
  }

  getService(): void {
    console.log(this.frontService.getTest());
  }

}
