import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepoimentoCardComponent } from './depoimento-card.component';

describe('DepoimentoCardComponent', () => {
  let component: DepoimentoCardComponent;
  let fixture: ComponentFixture<DepoimentoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepoimentoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepoimentoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
