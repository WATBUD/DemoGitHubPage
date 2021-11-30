import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerixxComponent } from './perixx.component';

describe('PerixxComponent', () => {
  let component: PerixxComponent;
  let fixture: ComponentFixture<PerixxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerixxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerixxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
