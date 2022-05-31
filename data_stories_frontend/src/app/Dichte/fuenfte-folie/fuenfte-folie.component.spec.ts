import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuenfteFolieComponent } from './fuenfte-folie.component';

describe('FuenfteFolieComponent', () => {
  let component: FuenfteFolieComponent;
  let fixture: ComponentFixture<FuenfteFolieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuenfteFolieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuenfteFolieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
