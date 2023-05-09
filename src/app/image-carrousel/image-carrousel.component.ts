import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {DataService} from "../services/data.service";



@Component({
  selector: 'app-image-carrousel',
  templateUrl: './image-carrousel.component.html',
  styleUrls: ['./image-carrousel.component.scss']
})
export class ImageCarrouselComponent implements OnInit, OnDestroy{

  @Input() slides?: string[];
  constructor() {}
  activeIndex :number = 0;
  private interval: any;

  ngOnInit() {
    this.startInterval();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  private startInterval() {
    this.interval = setInterval(() => {
      this.next();
    }, 3000);
  }


  previous(): void {
    if (this.slides){
      if (this.activeIndex === 0) {
        this.activeIndex = this.slides.length - 1;
      } else {
        this.activeIndex--;
      }
    }
  }

  next(): void {
   if (this.slides){
     if (this.activeIndex === this.slides.length - 1) {
       this.activeIndex = 0;
     } else {
       this.activeIndex++;
     }
   }
  }
}
