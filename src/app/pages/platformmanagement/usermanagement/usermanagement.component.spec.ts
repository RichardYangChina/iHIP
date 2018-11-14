import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { UsermanagementComponent } from './usermanagement.component';

describe('UsermanagementComponent', () => {
  let component: UsermanagementComponent;
  let fixture: ComponentFixture<UsermanagementComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UsermanagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsermanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
