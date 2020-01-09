import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent   {

  @Input() start: string;
  @Input() end: string;
  

  constructor() { }

  

}
