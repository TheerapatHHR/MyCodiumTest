import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number1',
  templateUrl: './number1.component.html',
  styleUrls: ['./number1.component.css']
})
export class Number1Component implements OnInit {
  answer1 = [];
  count: number = 1;
  control = [];

  constructor() { }

  ngOnInit(): void {
    for(let x = 1; x<=100; x++){
      if(x % 15 == 0){
        this.answer1.push('FizzBuzz');
        this.control.push(x);
      }
      else if(x % 3 == 0){
        this.answer1.push('Fizz');
      }
      else if(x % 5 == 0){
        this.answer1.push('Buzz');
      }
      else{
        this.answer1.push(x);
      }
    }
  }

}
