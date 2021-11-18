import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDemo1Component } from './TableDemo1';

describe('TableDemo1Component', () => {
  let component: TableDemo1Component;
  let fixture: ComponentFixture<TableDemo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableDemo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
