import { Component } from '@angular/core';
import * as endOfMonth from 'date-fns/end_of_month';

@Component({
  selector: 'app-datapickerrange',
  templateUrl: './datapickerrange.component.html',
  styleUrls: ['./datapickerrange.component.css']
})

export class DatapickerrangeComponent {
  ranges = { 'Today': [new Date(), new Date()], 'This Month': [new Date(), endOfMonth(new Date())] };

  onChange(result: Date[]): void {
    console.log('From: ', result[0], ', to: ', result[1]);
  }
}
