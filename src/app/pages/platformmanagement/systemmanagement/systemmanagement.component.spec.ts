import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemmanagementComponent } from './systemmanagement.component';

describe('SystemmanagementComponent', () => {
  let component: SystemmanagementComponent;
  let fixture: ComponentFixture<SystemmanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemmanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
