import { Component, OnInit } from '@angular/core';
import { RoleselectService } from 'src/app/services/roleselect.service';

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css']
})
export class UserManagementComponent implements OnInit {
  i = 1;
  editCache = {};
  dataSet = [];
  username: string;
  multipleValue = [];

  isVisible = false;
  isOkLoading = false;
  newPassword: string;
  isChangePassword: boolean = false;
  listOfOption = [];

  showModal(): void {
    this.isVisible = true;
    this.roleselectSev.getRoleSlectData().subscribe(data => {
      this.listOfOption = data.roleInfoTreeList;
      this.multipleValue = this.listOfOption.filter(item => item.state.selected).map(x => x.text);
    });
  }

  handleOk(): void {
    this.isOkLoading = true;
    window.setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  changePassword(): void {
    this.newPassword = '';
    this.isChangePassword = this.isChangePassword ? false : true;
  }

  constructor(private roleselectSev: RoleselectService) { }

  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      this.dataSet.push({
        key: i.toString(),
        name: `Edrward ${i}`,
        age: 32,
        address: `London Park no. ${i}`,
      });
    }
  }
}
