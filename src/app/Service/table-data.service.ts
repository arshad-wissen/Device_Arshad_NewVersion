import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableDataService {

  tableData : any[] = [
    {status:'unknown', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'unknown', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'unknown', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'unknown', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'unknown', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'unknown', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'operational', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'operational', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'operational', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'operational', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'operational', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'operational', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'operational', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'unknown', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'unknown', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'unknown', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'unknown', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'unknown', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'unknown', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'out of service', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'out of service', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'out of service', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'out of service', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'out of service', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'unknown', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'unknown', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'unknown', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'unknown', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'unknown', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'unknown', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'}
  ];

  constructor() { }

  //below: function will provide/return the tables data(this.tableData) wherever it is getting called
  getData() {
    return  this.tableData;
  }
}