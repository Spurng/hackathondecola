import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeisPaginaComponent } from './leis-pagina.component';

describe('LeisPaginaComponent', () => {
  let component: LeisPaginaComponent;
  let fixture: ComponentFixture<LeisPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeisPaginaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeisPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
