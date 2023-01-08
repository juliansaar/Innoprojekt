import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotansweredComponent } from './notanswered.component';

describe('NotansweredComponent', () => {
  let component: NotansweredComponent;
  let fixture: ComponentFixture<NotansweredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotansweredComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotansweredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
