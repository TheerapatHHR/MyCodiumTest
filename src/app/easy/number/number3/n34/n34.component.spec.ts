import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N34Component } from './n34.component';

describe('N34Component', () => {
  let component: N34Component;
  let fixture: ComponentFixture<N34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N34Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(N34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
