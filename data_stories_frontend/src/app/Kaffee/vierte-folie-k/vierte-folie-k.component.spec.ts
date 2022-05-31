import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VierteFolieKComponent } from './vierte-folie-k.component';

describe('VierteFolieKComponent', () => {
  let component: VierteFolieKComponent;
  let fixture: ComponentFixture<VierteFolieKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VierteFolieKComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VierteFolieKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
