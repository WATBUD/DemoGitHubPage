import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoListUIComponent } from './DemoListUI.component';

describe('DemoListUIComponent', () => {
  let component: DemoListUIComponent;
  let fixture: ComponentFixture<DemoListUIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoListUIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoListUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
