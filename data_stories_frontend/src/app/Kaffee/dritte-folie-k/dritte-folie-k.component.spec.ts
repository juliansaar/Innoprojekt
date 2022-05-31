import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DritteFolieKComponent } from './dritte-folie-k.component';

describe('DritteFolieKComponent', () => {
  let component: DritteFolieKComponent;
  let fixture: ComponentFixture<DritteFolieKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DritteFolieKComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DritteFolieKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
