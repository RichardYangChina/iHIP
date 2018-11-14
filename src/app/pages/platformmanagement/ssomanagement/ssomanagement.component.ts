import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalService, NzMessageService, NzModalRef } from 'ng-zorro-antd';
import { SsoService } from 'src/app/services/sso.service';

@Component({
  selector: 'app-ssomanagement',
  templateUrl: './ssomanagement.component.html',
  styleUrls: ['./ssomanagement.component.css']
})
export class SsomanagementComponent implements OnInit {
  dataSet = [];
  systemList = [];
  showImg: string;
  hasImg: boolean = false;

  validateForm: FormGroup;

  tplModal: NzModalRef;
  tplModalButtonLoading = false;

  constructor(private ssoSrv: SsoService,
    private fb: FormBuilder,
    private modalService: NzModalService,
    private msg: NzMessageService) { }

  createTplModal(tplTitle: TemplateRef<{}>, tplContent: TemplateRef<{}>, tplFooter: TemplateRef<{}>): void {
    this.tplModal = this.modalService.create({
      nzTitle: tplTitle,
      nzContent: tplContent,
      nzFooter: tplFooter,
      nzMaskClosable: false,
      nzClosable: true,
      nzWidth: 600
    });

    this.ssoSrv.getNewSystemData().subscribe(
      data => {
        this.systemList = data;
      }
    )
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

  selectedChanged(selectItem): void {
    this.validateForm.patchValue({
      "systemType": selectItem.sysType == "1" ? "CS" : "BS",
      "systemURL": ""
    });

    this.showImg = selectItem.sysIcon;
    if (this.showImg.length > 0)
      this.hasImg = true;
    else
      this.hasImg = false;
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
    this.ssoSrv.getSSOData().subscribe(data => {
      this.dataSet = data;
    });

    this.validateForm = this.fb.group({
      system: [null, [Validators.required]],
      //serviceCode: [null, [Validators.required]],
      systemType: [null],
      systemURL: [null],
    });
  }

}
