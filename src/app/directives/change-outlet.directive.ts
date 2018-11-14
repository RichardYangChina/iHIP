import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Directive({
  selector: '[appChangeOutlet]',
  host: {
    '(input)': 'update($event)'
  }
})
export class ChangeOutletDirective implements OnInit {
  ngOnInit(): void {
    if (this.olName != "Main") {
      this.el.nativeElement.attributes.name.value = this.olName;

      let tabUrl = [];

      switch (this.olName) {
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
  @Input() olName: string;

  constructor(private el: ElementRef, private router: Router, private route: ActivatedRoute) { }

}
