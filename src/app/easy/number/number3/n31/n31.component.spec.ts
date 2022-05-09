import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N31Component } from './n31.component';

describe('N31Component', () => {
  let component: N31Component;
  let fixture: ComponentFixture<N31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N31Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(N31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
