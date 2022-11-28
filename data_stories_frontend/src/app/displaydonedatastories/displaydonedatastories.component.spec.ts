import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaydonedatastoriesComponent } from './displaydonedatastories.component';

describe('DisplaydonedatastoriesComponent', () => {
  let component: DisplaydonedatastoriesComponent;
  let fixture: ComponentFixture<DisplaydonedatastoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaydonedatastoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplaydonedatastoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
