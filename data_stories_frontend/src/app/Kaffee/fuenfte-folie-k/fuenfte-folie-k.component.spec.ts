import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuenfteFolieKComponent } from './fuenfte-folie-k.component';

describe('FuenfteFolieKComponent', () => {
  let component: FuenfteFolieKComponent;
  let fixture: ComponentFixture<FuenfteFolieKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuenfteFolieKComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuenfteFolieKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
