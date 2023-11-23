import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosDetailsClientComponent } from './carros-details-client.component';

describe('CarrosDetailsClientComponent', () => {
  let component: CarrosDetailsClientComponent;
  let fixture: ComponentFixture<CarrosDetailsClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarrosDetailsClientComponent]
    });
    fixture = TestBed.createComponent(CarrosDetailsClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
