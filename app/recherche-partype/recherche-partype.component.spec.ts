import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecherchePartypeComponent } from './recherche-partype.component';

describe('RecherchePartypeComponent', () => {
  let component: RecherchePartypeComponent;
  let fixture: ComponentFixture<RecherchePartypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecherchePartypeComponent]
    });
    fixture = TestBed.createComponent(RecherchePartypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
