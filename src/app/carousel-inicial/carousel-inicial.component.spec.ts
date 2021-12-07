import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselInicialComponent } from './carousel-inicial.component';

describe('CarouselInicialComponent', () => {
  let component: CarouselInicialComponent;
  let fixture: ComponentFixture<CarouselInicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselInicialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
