import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent   {

  @Input() start: string;
  @Input() end: string;
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  

  constructor() { }

  

}
