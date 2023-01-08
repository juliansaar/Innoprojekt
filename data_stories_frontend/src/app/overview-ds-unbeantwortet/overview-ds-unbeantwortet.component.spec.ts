import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewDsUnbeantwortetComponent } from './overview-ds-unbeantwortet.component';

describe('OverviewDsUnbeantwortetComponent', () => {
  let component: OverviewDsUnbeantwortetComponent;
  let fixture: ComponentFixture<OverviewDsUnbeantwortetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewDsUnbeantwortetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewDsUnbeantwortetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
