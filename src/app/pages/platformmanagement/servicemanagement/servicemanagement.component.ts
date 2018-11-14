import { Component, OnInit, TemplateRef, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { NzMessageService, NzModalService, NzModalRef } from 'ng-zorro-antd';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-servicemanagement',
  templateUrl: './servicemanagement.component.html',
  styleUrls: ['./servicemanagement.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ServicemanagementComponent implements OnInit {
  dataSet = [];

  constructor(private fb: FormBuilder,
    private modalService: NzModalService,
    private msg: NzMessageService) { }

  validateForm: FormGroup;

  tplModal: NzModalRef;
  tplModalButtonLoading = false;

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

  itemOperate(actionType: string, itemData: any, tplTitle: TemplateRef<{}>, tplContent: TemplateRef<{}>, tplFooter: TemplateRef<{}>): void {
    if (actionType == "update") {
      this.validateForm.patchValue({
        "serviceName": itemData.servicename,
        "serviceCode": itemData.servicecode,
        "system": itemData.system,
        "msgFormat": itemData.msgformat,
        "serviceURL": itemData.serviceurl,
        "protocolType": itemData.protocoltype,
        "status": itemData.status
      });

      this.createTplModal(tplTitle, tplContent, tplFooter);
    } else {

    }
  }


  ngOnInit() {
    this.validateForm = this.fb.group({
      serviceName: [null, [Validators.required]],
      serviceCode: [null, [Validators.required]],
      system: [null, [Validators.required]],
      msgFormat: [null, [Validators.required]],
      serviceURL: [null, [Validators.required]],
      protocolType: [null, [Validators.required]],
      serviceMethodSpaceName: [null, [Validators.required]],
      serviceParamSpaceName: [null],
      serviceRequestMethod: [null, [Validators.required]],
      serviceRequestParam: [null, [Validators.required]],
      serviceResponseMethod: [null, [Validators.required]],
      serviceResponseParam: [null, [Validators.required]],
      status: [null, [Validators.required]],
      timeout: [null],
      comments: [null]
    });

    for (let i = 0; i < 30; i++) {
      this.dataSet.push({
        "servicecode": "CIS" + i,
        "servicename": "CIS申请单新增服务",
        "system": "CIS",
        "msgformat": "HL7v3.X",
        "protocoltype": "HTTP",
        "serviceurl": "http://119.23.146.134:10011/EcgWebService.asmx?wsdl",
        "status": "启用",
        "updatedate": "2018-10-21 10:27:20",
        "updateby": "detalhiip"
      })
    }
  }

}
