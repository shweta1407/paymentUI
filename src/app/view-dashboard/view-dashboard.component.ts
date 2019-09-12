import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-dashboard',
  templateUrl: './view-dashboard.component.html',
  styleUrls: ['./view-dashboard.component.css']
})
export class ViewDashboardComponent implements OnInit {

  curr: Currency[];
  selectedCurrency: Currency;
  
  constructor() {
    //SelectItem API with label-value pairs
    this.curr = [
      {name: 'USD', code: 'USD'},
      {name: 'GBP', code: 'GBP'},
      {name: 'EUR', code: 'EUR'},
      
    ];
  }

  public myFunction() {
    var x = document.getElementById("container3");
        x.style.visibility = "visible";
  
  }
  ngOnInit() {
  }

}
interface Currency {
  name: string;
  code: string;
}