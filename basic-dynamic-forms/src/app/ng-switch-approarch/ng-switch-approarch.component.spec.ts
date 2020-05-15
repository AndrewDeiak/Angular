import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwitchApproarchComponent } from './ng-switch-approarch.component';

describe('NgSwitchApproarchComponent', () => {
  let component: NgSwitchApproarchComponent;
  let fixture: ComponentFixture<NgSwitchApproarchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSwitchApproarchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSwitchApproarchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
