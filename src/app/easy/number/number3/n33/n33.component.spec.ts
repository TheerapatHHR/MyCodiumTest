import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N33Component } from './n33.component';

describe('N33Component', () => {
  let component: N33Component;
  let fixture: ComponentFixture<N33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N33Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(N33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
