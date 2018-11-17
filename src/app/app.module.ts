import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PlatformmanagementComponent } from './pages/platformmanagement/platformmanagement.component';
import { AppRoutingModule } from './app-routing.module';
import { PlatformManagementModule } from './pages/platformmanagement/platformmanagement.module';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { IconModule } from '@ant-design/icons-angular';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ChangeOutletDirective } from './directives/change-outlet.directive';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    PlatformmanagementComponent,
    MenuComponent,
    PageNotFoundComponent,
    ChangeOutletDirective,
    NavMenuComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    NgZorroAntdModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    IconModule,
    AppRoutingModule,
    PlatformManagementModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }

registerLocaleData(zh);
