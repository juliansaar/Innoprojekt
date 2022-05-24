import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErsteFolieComponent } from './erste-folie.component';

describe('ErsteFolieComponent', () => {
  let component: ErsteFolieComponent;
  let fixture: ComponentFixture<ErsteFolieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErsteFolieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErsteFolieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
