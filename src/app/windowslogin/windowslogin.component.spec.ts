import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowsloginComponent } from './windowslogin.component';

describe('WindowsloginComponent', () => {
  let component: WindowsloginComponent;
  let fixture: ComponentFixture<WindowsloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowsloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowsloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
