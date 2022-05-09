import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N35Component } from './n35.component';

describe('N35Component', () => {
  let component: N35Component;
  let fixture: ComponentFixture<N35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N35Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(N35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
