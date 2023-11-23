import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosListClientComponent } from './carros-list-client.component';

describe('CarrosListClientComponent', () => {
  let component: CarrosListClientComponent;
  let fixture: ComponentFixture<CarrosListClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarrosListClientComponent]
    });
    fixture = TestBed.createComponent(CarrosListClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
