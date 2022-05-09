import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-medium',
  templateUrl: './medium.component.html',
  styleUrls: ['./medium.component.css']
})
export class MediumComponent implements OnInit {
  @Input() num:number;
  prime_list = [];
  check = null;
  answer = [];
  n = null;

  constructor() { }

  ngOnInit(): void {
  }

  primeCheck(){
    this.answer = [];
    this.prime_list = [];
    this.n = this.num;
    for(let i = 2; i<= this.n; i++){
      this.check = this.prime_list.includes(i);
      if(this.check == false){
        this.answer.push(i);
        //console.log('answer'+this.answer);
        for(let j = i*i; j<=this.n; j = j+i){
          this.prime_list.push(j);
          //console.log('prime'+this.prime_list);

        }
      }
    }
    //console.log(this.answer);
  }

}
