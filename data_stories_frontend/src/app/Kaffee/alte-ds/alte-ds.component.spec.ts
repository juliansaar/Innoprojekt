import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlteDsComponent } from './alte-ds.component';

describe('AlteDsComponent', () => {
  let component: AlteDsComponent;
  let fixture: ComponentFixture<AlteDsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlteDsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlteDsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
