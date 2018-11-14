import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NzModalService, NzModalRef } from 'ng-zorro-antd';

@Component({
  selector: 'app-role-management',
  templateUrl: './role-management.component.html',
  styleUrls: ['./role-management.component.css']
})
export class RoleManagementComponent implements OnInit {
  i = 1;
  openDrawer = false;
  userName: string;
  editCache = {};
  dataSet = [];

  constructor(private fb: FormBuilder, private modalService: NzModalService) {
  }

  startEdit(key: string): void {
    this.editCache[key].edit = true;
  }

  cancelEdit(key: string): void {
    this.editCache[key].edit = false;
  }

  saveEdit(key: string): void {
    const index = this.dataSet.findIndex(item => item.key === key);
    this.dataSet[index] = this.editCache[key].data;
    this.editCache[key].edit = false;
  }

  updateEditCache(): void {
    this.dataSet.forEach(item => {
      if (!this.editCache[item.key]) {
        this.editCache[item.key] = {
          edit: false,
          data: item
        };
      }
    });
  }

  deleteRow(i: string): void {
    const dataSet = this.dataSet.filter(d => d.key !== i);
    this.dataSet = dataSet;
  }

  tplModal: NzModalRef;
  tplModalButtonLoading = false;

  createTplModal(tplTitle: TemplateRef<{}>, tplContent: TemplateRef<{}>, tplFooter: TemplateRef<{}>): void {
    this.tplModal = this.modalService.create({
      nzTitle: tplTitle,
      nzContent: tplContent,
      nzFooter: null,
      nzMaskClosable: false,
      nzClosable: true
    });
  }

  destroyTplModal(): void {
    this.tplModalButtonLoading = true;
    window.setTimeout(() => {
      this.tplModalButtonLoading = false;
      this.tplModal.destroy();
    }, 1000);
  }

  validateForm: FormGroup;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    this.destroyTplModal();
  }

  open(user): void {
    this.openDrawer = true;
    this.userName = user;
  }

  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      this.dataSet.push({
        key: i.toString(),
        name: `Edrward ${i}`,
        creator: 'Admin',
        desc: `London Park no. ${i}`,
        creationDate: new Date()
      });
    }
    this.updateEditCache();

    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      userDesc: [null, [Validators.required]],
      remember: [true]
    });
  }
}
