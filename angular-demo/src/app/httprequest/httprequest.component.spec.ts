import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HTTPRequestComponent } from './httprequest.component';

describe('HTTPRequestComponent', () => {
  let component: HTTPRequestComponent;
  let fixture: ComponentFixture<HTTPRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HTTPRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HTTPRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
