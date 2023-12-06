import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjektumFeltoltesComponent } from './objektum-feltoltes.component';

describe('ObjektumFeltoltesComponent', () => {
  let component: ObjektumFeltoltesComponent;
  let fixture: ComponentFixture<ObjektumFeltoltesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObjektumFeltoltesComponent]
    });
    fixture = TestBed.createComponent(ObjektumFeltoltesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
