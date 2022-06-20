import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatastorycreatorComponent } from './datastorycreator.component';

describe('DatastorycreatorComponent', () => {
  let component: DatastorycreatorComponent;
  let fixture: ComponentFixture<DatastorycreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatastorycreatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatastorycreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
