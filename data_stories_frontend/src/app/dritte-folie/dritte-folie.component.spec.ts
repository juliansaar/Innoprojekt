import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DritteFolieComponent } from './dritte-folie.component';

describe('DritteFolieComponent', () => {
  let component: DritteFolieComponent;
  let fixture: ComponentFixture<DritteFolieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DritteFolieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DritteFolieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
