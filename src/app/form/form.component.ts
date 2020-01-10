import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input () dateFrom: null;
  @Input () dateTo: null;
  startDate: "ВЫБЕРИТЕ ДАТУ НАЧАЛА"

  items = [];

  addItem(newItem: string) {
    this.items.push(this.dateFrom, this.dateTo);
  }

  

 
  constructor() {
   
   }

   

  ngOnInit() {
    
  }

    
  

  

}
