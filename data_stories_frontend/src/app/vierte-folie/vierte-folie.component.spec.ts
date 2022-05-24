import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VierteFolieComponent } from './vierte-folie.component';

describe('VierteFolieComponent', () => {
  let component: VierteFolieComponent;
  let fixture: ComponentFixture<VierteFolieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VierteFolieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VierteFolieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
