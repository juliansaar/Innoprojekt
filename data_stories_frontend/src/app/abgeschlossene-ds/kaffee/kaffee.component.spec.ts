import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaffeeComponent } from './kaffee.component';

describe('KaffeeComponent', () => {
  let component: KaffeeComponent;
  let fixture: ComponentFixture<KaffeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KaffeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KaffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
