import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { AjaxdatatableComponent } from './ajaxdatatable.component';

describe('AjaxdatatableComponent', () => {
  let component: AjaxdatatableComponent;
  let fixture: ComponentFixture<AjaxdatatableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AjaxdatatableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjaxdatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
