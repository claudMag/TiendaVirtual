import {Component, Input, OnInit} from '@angular/core';
import {CardBanner} from "../models/card-banner.model";

@Component({
  selector: 'app-cards-banner',
  templateUrl: './cards-banner.component.html',
  styleUrls: ['./cards-banner.component.scss']
})
export class CardsBannerComponent implements OnInit{

  @Input() cardsBanner?:CardBanner[];
  constructor() {
  }
  ngOnInit(): void {}


}
