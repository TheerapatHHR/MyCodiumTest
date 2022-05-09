import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N32Component } from './n32.component';

describe('N32Component', () => {
  let component: N32Component;
  let fixture: ComponentFixture<N32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N32Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(N32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
