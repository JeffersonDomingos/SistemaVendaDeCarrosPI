import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCarrosComponent } from './details-carros.component';

describe('DetailsCarrosComponent', () => {
  let component: DetailsCarrosComponent;
  let fixture: ComponentFixture<DetailsCarrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsCarrosComponent]
    });
    fixture = TestBed.createComponent(DetailsCarrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
