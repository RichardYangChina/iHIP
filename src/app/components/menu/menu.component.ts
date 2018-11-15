import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuData = [];
  @Input() isCollapsed: boolean = false;
  @Output() addNewTab = new EventEmitter<string>();

  constructor(private menuService: MenuService) {
  }

  ngOnInit(): void {
    this.menuService.getMenuData().subscribe(data => {
      this.menuData = data;
    });
  }

  addNewTabs(tab: any): void {
    this.addNewTab.emit(tab);
  }
}
