import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaydatastoryComponent } from './displaydatastory.component';

describe('DisplaydatastoryComponent', () => {
  let component: DisplaydatastoryComponent;
  let fixture: ComponentFixture<DisplaydatastoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaydatastoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaydatastoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
