import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-simpletable',
  templateUrl: './simpletable.component.html',
  styleUrls: ['./simpletable.component.css']
})
export class SimpletableComponent implements OnInit {
  @Output() action = new EventEmitter<string>();
  dataSet = [];

  constructor() { }

  userAction(actionType: string) {
    this.action.emit(actionType);
  }

  ngOnInit() {
    for (let i = 0; i < 30; i++) {
      this.dataSet.push({
        "systemImg": "无图片",
        "systemCode": "YGXT",
        "systemName": "院感系统",
        "systemPurpose": "两者都有",
        "company": "111",
        "status": "启用状态",
        "updateDate": "2018-10-25 10:27:03"
      })
    }
  }

}
