import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumpadKeyboardComponent } from './NumpadKeyboard';

describe('NumpadKeyboardComponent', () => {
  let component: NumpadKeyboardComponent;
  let fixture: ComponentFixture<NumpadKeyboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumpadKeyboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumpadKeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
