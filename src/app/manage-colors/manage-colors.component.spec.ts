import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageColorsComponent } from './manage-colors.component';

describe('ManageColorsComponent', () => {
  let component: ManageColorsComponent;
  let fixture: ComponentFixture<ManageColorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageColorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
