import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Number3Component } from './number3.component';

describe('Number3Component', () => {
  let component: Number3Component;
  let fixture: ComponentFixture<Number3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Number3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Number3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
