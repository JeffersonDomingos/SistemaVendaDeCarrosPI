import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCarrosComponent } from './create-carros.component';

describe('CreateCarrosComponent', () => {
  let component: CreateCarrosComponent;
  let fixture: ComponentFixture<CreateCarrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCarrosComponent]
    });
    fixture = TestBed.createComponent(CreateCarrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
