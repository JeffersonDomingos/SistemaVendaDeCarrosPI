import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCarrosComponent } from './update-carros.component';

describe('UpdateCarrosComponent', () => {
  let component: UpdateCarrosComponent;
  let fixture: ComponentFixture<UpdateCarrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCarrosComponent]
    });
    fixture = TestBed.createComponent(UpdateCarrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
