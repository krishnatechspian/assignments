import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLayout2Component } from './header-layout-2.component';

describe('HeaderLayout2Component', () => {
  let component: HeaderLayout2Component;
  let fixture: ComponentFixture<HeaderLayout2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderLayout2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderLayout2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
