import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionmanagementComponent } from './permissionmanagement.component';

describe('PermissionmanagementComponent', () => {
  let component: PermissionmanagementComponent;
  let fixture: ComponentFixture<PermissionmanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermissionmanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
