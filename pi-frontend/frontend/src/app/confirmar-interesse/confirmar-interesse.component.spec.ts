import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarInteresseComponent } from './confirmar-interesse.component';

describe('ConfirmarInteresseComponent', () => {
  let component: ConfirmarInteresseComponent;
  let fixture: ComponentFixture<ConfirmarInteresseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmarInteresseComponent]
    });
    fixture = TestBed.createComponent(ConfirmarInteresseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
