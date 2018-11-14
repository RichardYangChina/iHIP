import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlatformManagementRoutingModule } from './platform-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatapickerrangeComponent } from 'src/app/components/datapickerrange/datapickerrange.component';
import { AjaxdatatableComponentComponent } from 'src/app/components/ajaxdatatable/ajaxdatatable.component';
import { DrawerComponent } from 'src/app/components/drawer/drawer.component';
import { SimpletableComponent } from 'src/app/components/simpletable/simpletable.component';
import { RoleManagementComponent } from './role-management/role-management.component';
import { MainComponent } from './main/main.component';
import { UserManagementComponent } from './usermanagement/usermanagement.component';
import { PermissionmanagementComponent } from './permissionmanagement/permissionmanagement.component';
import { SystemmanagementComponent } from './systemmanagement/systemmanagement.component';
import { ServicemanagementComponent } from './servicemanagement/servicemanagement.component';
import { SsomanagementComponent } from './ssomanagement/ssomanagement.component';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    PlatformManagementRoutingModule
  ],
  declarations: [
    RoleManagementComponent,
    MainComponent,
    UserManagementComponent,
    PermissionmanagementComponent,
    DatapickerrangeComponent,
    AjaxdatatableComponentComponent,
    DrawerComponent,
    SystemmanagementComponent,
    SimpletableComponent,
    ServicemanagementComponent,
    SsomanagementComponent
  ],
})
export class PlatformManagementModule { }