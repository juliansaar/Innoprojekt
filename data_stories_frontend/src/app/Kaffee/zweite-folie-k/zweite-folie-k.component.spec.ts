import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZweiteFolieKComponent } from './zweite-folie-k.component';

describe('ZweiteFolieKComponent', () => {
  let component: ZweiteFolieKComponent;
  let fixture: ComponentFixture<ZweiteFolieKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZweiteFolieKComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZweiteFolieKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
