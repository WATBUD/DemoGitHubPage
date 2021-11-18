import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollDemo1Component } from './ScrollDemo1';

describe('ScrollDemo1Component', () => {
  let component: ScrollDemo1Component;
  let fixture: ComponentFixture<ScrollDemo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollDemo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
