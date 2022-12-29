import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewDsAbgeschlossenComponent } from './overview-ds-abgeschlossen.component';

describe('OverviewDsAbgeschlossenComponent', () => {
  let component: OverviewDsAbgeschlossenComponent;
  let fixture: ComponentFixture<OverviewDsAbgeschlossenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewDsAbgeschlossenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewDsAbgeschlossenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
