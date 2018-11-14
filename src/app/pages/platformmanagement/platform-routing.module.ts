import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatformmanagementComponent } from './platformmanagement.component';
import { RoleManagementComponent } from './role-management/role-management.component';
import { MainComponent } from './main/main.component';
import { UserManagementComponent } from './usermanagement/usermanagement.component';
import { PermissionmanagementComponent } from './permissionmanagement/permissionmanagement.component';
import { SystemmanagementComponent } from './systemmanagement/systemmanagement.component';
import { ServicemanagementComponent } from './servicemanagement/servicemanagement.component';
import { SsomanagementComponent } from './ssomanagement/ssomanagement.component';

const platformRoutes: Routes = [
  {
    path: 'platform',
    component: PlatformmanagementComponent,
    children: [
      { path: 'rolemanagement', component: RoleManagementComponent, outlet: 'role' },
      { path: 'main', component: MainComponent },
      { path: 'usermanagement', component: UserManagementComponent, outlet: 'user' },
      { path: 'permissionmanagement', component: PermissionmanagementComponent, outlet: 'permission' },
      { path: 'systemmanagement', component: SystemmanagementComponent, outlet: 'system' },
      { path: 'servicemanagement', component: ServicemanagementComponent, outlet: 'service' },
      { path: 'ssomanagement', component: SsomanagementComponent, outlet: 'sso' }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(platformRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PlatformManagementRoutingModule { }