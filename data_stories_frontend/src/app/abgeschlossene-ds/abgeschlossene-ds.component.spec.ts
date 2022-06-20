import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbgeschlosseneDsComponent } from './abgeschlossene-ds.component';

describe('AbgeschlosseneDsComponent', () => {
  let component: AbgeschlosseneDsComponent;
  let fixture: ComponentFixture<AbgeschlosseneDsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbgeschlosseneDsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbgeschlosseneDsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
