import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N36Component } from './n36.component';

describe('N36Component', () => {
  let component: N36Component;
  let fixture: ComponentFixture<N36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N36Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(N36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
