import { Component, OnInit } from '@angular/core';
import { NumService } from '../numService.service';

@Component({
  selector: 'app-n33',
  templateUrl: './n33.component.html',
  styleUrls: ['../number3.component.css']
})
export class N33Component implements OnInit {

  num = null;
  star = [];
  rows = [];
  cols = [];

  constructor(private numService: NumService) {
    this.numService.numUpdated.subscribe(
      (num: number) => (this.num = this.numService.num, this.buildStar(this.num))
    );
   }

  ngOnInit(): void {
  }

  buildStar(n: number){
    this.star = [];
    this.rows = [];
    this.cols = [] ;
    for(let r = 0; r<n; r++){
      this.rows.push(r);
    }
    for(let c = 0; c<((2*n)-1); c++){
      this.cols.push(c);
    }

    for(let i = 0; i<(this.rows.length); i++ ){
      for(let j = 0; j<(this.cols.length); j++){
        if(n-1-i == j || n-1+i == j){
          this.star.push("*");
        }
        else{
          this.star.push(" ");
        }
      }
    }
    // console.log(this.rows);
    // console.log(this.cols);
    // console.log(this.cols.length);
    //console.log(this.star);
  }

}
