import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TombFeltoltesComponent } from './tomb-feltoltes.component';

describe('TombFeltoltesComponent', () => {
  let component: TombFeltoltesComponent;
  let fixture: ComponentFixture<TombFeltoltesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TombFeltoltesComponent]
    });
    fixture = TestBed.createComponent(TombFeltoltesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
