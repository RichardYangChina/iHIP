import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzModalRef, NzModalService, NzMessageService, UploadFile } from 'ng-zorro-antd';

@Component({
  selector: 'app-systemmanagement',
  templateUrl: './systemmanagement.component.html',
  styleUrls: ['./systemmanagement.component.css']
})
export class SystemmanagementComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private modalService: NzModalService,
    private msg: NzMessageService) { }

  validateForm: FormGroup;

  tplModal: NzModalRef;
  tplModalButtonLoading = false;

  fileList: UploadFile[] = [];
  previewImage = '';
  previewVisible = false;

  createTplModal(tplTitle: TemplateRef<{}>, tplContent: TemplateRef<{}>, tplFooter: TemplateRef<{}>): void {
    this.tplModal = this.modalService.create({
      nzTitle: tplTitle,
      nzContent: tplContent,
      nzFooter: tplFooter,
      nzMaskClosable: false,
      nzClosable: true,
      nzWidth: 1000
    });
  }

  destroyTplModal(): void {
    this.tplModalButtonLoading = true;
    window.setTimeout(() => {
      this.tplModalButtonLoading = false;
      this.tplModal.destroy();
    }, 1000);
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  handlePreview = (file: UploadFile) => {
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  }

  beforeUpload = (file: UploadFile): boolean => {
    this.fileList.push(file);
    return false;
  }

  itemOperate(actionType: string, tplTitle: TemplateRef<{}>, tplContent: TemplateRef<{}>, tplFooter: TemplateRef<{}>): void {
    if (actionType == "update") {
      this.createTplModal(tplTitle, tplContent, tplFooter);
    } else {

    }
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      systemName: [null, [Validators.required]],
      systemCode: [null, [Validators.required]],
      status: [null, [Validators.required]],
      company: [null],
      systemType: [null, [Validators.required]],
      systemPurpose: [null, [Validators.required]],
    });
  }

}
