import { Component, OnInit } from '@angular/core';
import { NzFormatEmitEvent, NzTreeNode } from 'ng-zorro-antd';

@Component({
  selector: 'app-permissionmanagement',
  templateUrl: './permissionmanagement.component.html',
  styleUrls: ['./permissionmanagement.component.css']
})
export class PermissionmanagementComponent implements OnInit {

  constructor() { }

  isSpinning = false;
  roleValue;
  typeValue;
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

  isReset = false;
  isSave = false;

  reset(): void {
    this.isReset = true;
    setTimeout(_ => {
      this.isReset = false;
    }, 1000);
  }

  save(): void {
    this.isSave = true;
    setTimeout(_ => {
      this.isSave = false;
    }, 2000);
  }

  ngOnInit(): void {
  }

}
