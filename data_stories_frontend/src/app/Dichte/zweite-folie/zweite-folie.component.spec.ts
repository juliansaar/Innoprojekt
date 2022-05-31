import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZweiteFolieComponent } from './zweite-folie.component';

describe('ZweiteFolieComponent', () => {
  let component: ZweiteFolieComponent;
  let fixture: ComponentFixture<ZweiteFolieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZweiteFolieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZweiteFolieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
