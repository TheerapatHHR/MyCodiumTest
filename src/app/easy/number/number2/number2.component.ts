import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-number2',
  templateUrl: './number2.component.html',
  styleUrls: ['./number2.component.css']
})
export class Number2Component implements OnInit {
  @Input() year:number;
  checkYear: number = null;
  yearStatus = '';

  constructor() { }

  ngOnInit(): void {
  }

  onCheck(){
    this.checkYear = this.year;
    if(this.checkYear % 400 == 0){
      this.yearStatus = 'LEAP YEAR';
    }
    else{
      this.checkYear = this.checkYear % 400;
      if(this.checkYear %100 != 0){
        this.checkYear = this.checkYear % 100;
        if(this.checkYear % 4 == 0){
          this.yearStatus = 'LEAP YEAR';
        }
        else{
          this.yearStatus = 'NOT LEAP YEAR';
        }
      }
      else{
        this.yearStatus = 'NOT LEAP YEAR';
      }
    }

  }

}
