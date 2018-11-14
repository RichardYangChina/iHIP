import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  ssoData = [];

  constructor(private sso: DashboardService) { }

  ngOnInit() {
    this.sso.getSystemsData().subscribe(
      data => {
        this.ssoData = data;
      }
    )
  }

  navSystem(): void {

  }

}
