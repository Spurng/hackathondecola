import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepoimentosPageComponent } from './depoimentos-page.component';

describe('DepoimentosPageComponent', () => {
  let component: DepoimentosPageComponent;
  let fixture: ComponentFixture<DepoimentosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepoimentosPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepoimentosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
