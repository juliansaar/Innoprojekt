import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErsteFolieKComponent } from './erste-folie-k.component';

describe('ErsteFolieKComponent', () => {
  let component: ErsteFolieKComponent;
  let fixture: ComponentFixture<ErsteFolieKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErsteFolieKComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErsteFolieKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
