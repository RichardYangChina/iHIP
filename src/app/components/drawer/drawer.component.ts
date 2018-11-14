import { Component, Input, EventEmitter, Output } from '@angular/core';
import { NzFormatEmitEvent } from 'ng-zorro-antd';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})

export class DrawerComponent {
  @Input() visible = false;
  @Input() userName: string;
  @Output() visibleChange = new EventEmitter<boolean>();

  close(): void {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

  isSpinning = false;
  defaultCheckedKeys = [];
  defaultSelectedKeys = [];
  defaultExpandedKeys = [];

  nodes = [{
    title: '共享文档管理',
    key: '共享文档管理',
    expanded: true,
    children: [
      { title: '文档浏览器', key: '文档浏览器', isLeaf: true },
      { title: 'CDA反写CDR日志', key: 'CDA反写CDR日志', isLeaf: true },
      { title: 'CDA生成器文档日志', key: 'CDA生成器文档日志', isLeaf: true }
    ]
  }, {
    title: '平台管理',
    key: '平台管理',
    children: [
      { title: '角色管理', key: '角色管理', isLeaf: true },
      { title: '权限管理', key: '权限管理', isLeaf: true },
      { title: '用户管理', key: '用户管理', isLeaf: true }
    ]
  }];

  nzEvent(event: NzFormatEmitEvent): void {
    console.log(event);
  }
}
