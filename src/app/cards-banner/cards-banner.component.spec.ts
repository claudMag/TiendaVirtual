import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsBannerComponent } from './cards-banner.component';

describe('CardsBannerComponent', () => {
  let component: CardsBannerComponent;
  let fixture: ComponentFixture<CardsBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
