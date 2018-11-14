import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SsomanagementComponent } from './ssomanagement.component';

describe('SsomanagementComponent', () => {
  let component: SsomanagementComponent;
  let fixture: ComponentFixture<SsomanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SsomanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SsomanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
