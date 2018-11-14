import { Component, OnInit } from '@angular/core';
import { ExceptionslistService } from '../../services/exceptionslist.service';

@Component({
  selector: 'app-ajaxdatatable',
  providers: [ExceptionslistService],
  templateUrl: './ajaxdatatable.component.html'
})
export class AjaxdatatableComponentComponent implements OnInit {
  pageIndex = 1;
  pageSize = 10;
  total = 1;
  dataSet = [];
  loading = true;
  sortValue = 'DESC';
  sortKey = 'create_date';
  allChecked = false;
  indeterminate = false;

  sort(sort: { key: string, value: string }): void {
    this.sortKey = sort.key;
    this.sortValue = sort.value == 'descend' ? 'DESC' : 'ASC';
    this.searchData();
  }

  constructor(private exceptionslistService: ExceptionslistService) {
  }

  searchData(reset: boolean = false): void {
    if (reset) {
      this.pageIndex = 1;
    }
    this.loading = true;
    this.exceptionslistService.getExceptionslist(this.pageIndex, this.pageSize, this.sortKey, this.sortValue).subscribe((data: any) => {
      this.loading = false;
      this.total = data.datas.total;
      this.dataSet = data.datas.rows;
    });
  }

  updateFilter(value: string[]): void {
    this.searchData(true);
  }

  ngOnInit(): void {
    this.searchData();
  }

  checkAll(value: boolean): void {
    this.dataSet.forEach(data => {
      if (!data.disabled) {
        data.checked = value;
      }
    });
    this.refreshStatus();
  }

  refreshStatus(): void {
    const allChecked = this.dataSet.filter(value => !value.disabled).every(value => value.checked === true);
    const allUnChecked = this.dataSet.filter(value => !value.disabled).every(value => !value.checked);
    this.allChecked = allChecked;
    this.indeterminate = (!allChecked) && (!allUnChecked);
  }
}
