// slider.component.ts
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  goodimage: string = "assets/images/large-movie1.jpg";
  imageArray: string[] = Array.from({ length: 100000 }, () => this.goodimage);

  @Input() sliderConfig: any;
  @Input() title: string;

  constructor() { }

  ngOnInit(): void { }
}

