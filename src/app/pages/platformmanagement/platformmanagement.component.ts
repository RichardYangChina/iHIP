import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-platformmanagement',
  templateUrl: './platformmanagement.component.html',
  styleUrls: ['./platformmanagement.component.css']
})
export class PlatformmanagementComponent implements OnInit {
  isCollapsed = false;
  triggerTemplate = null;
  @ViewChild('trigger') customTrigger: TemplateRef<void>;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  /** custom trigger can be TemplateRef **/
  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }

  index = 0;
  tabs = ['Main'];

  closeTab(tab: string): void {
    this.tabs.splice(this.tabs.indexOf(tab), 1);
  }

  newTab(tab): void {
    if (this.tabs.indexOf(tab.outlet) > 0) {
      this.index = this.tabs.indexOf(tab.outlet);
      return;
    }

    this.tabs.push(tab.outlet);
    this.index = this.tabs.length - 1;
    let tabUrl = [];

    switch (tab.outlet) {
      case "role":
        tabUrl = ['/platform', { outlets: { role: 'rolemanagement' } }];
        break;

      case "user":
        tabUrl = ['/platform', { outlets: { user: 'usermanagement' } }];
        break;

      case "permission":
        tabUrl = ['/platform', { outlets: { permission: 'permissionmanagement' } }];
        break;

      case "system":
        tabUrl = ['/platform', { outlets: { system: 'systemmanagement' } }];
        break;

      case "service":
        tabUrl = ['/platform', { outlets: { service: 'servicemanagement' } }];
        break;

      case "sso":
        tabUrl = ['/platform', { outlets: { sso: 'ssomanagement' } }];
        break;
    }
    this.router.navigate(tabUrl, { relativeTo: this.route });
  }
}
