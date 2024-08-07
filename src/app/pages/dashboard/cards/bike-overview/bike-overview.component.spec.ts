import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeOverviewComponent } from './bike-overview.component';

describe('BikeOverviewComponent', () => {
  let component: BikeOverviewComponent;
  let fixture: ComponentFixture<BikeOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikeOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BikeOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
