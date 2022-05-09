import { Component, OnInit } from '@angular/core';
import { NumService } from '../numService.service';

@Component({
  selector: 'app-n36',
  templateUrl: './n36.component.html',
  styleUrls: ['../number3.component.css']
})
export class N36Component implements OnInit {

  num = null;
  star = [];
  rows = [];
  cols = [];
  round = [];

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
    this.round = [];

    for(let r = 0; r<(2*n-1); r++){
      this.rows.push(r);
    }
    for(let c = 0; c<(2*n-1); c++){
      this.cols.push(c);
    }

    for( let x = (-n+1); x<n; x++){
      this.round.push(x);
    }
    //console.log(this.round);
    n = (2*n)-1;
    //console.log(n);

    for(let row = 0; row<n; row++){
      for(let col = 0; col<n; col++){
        if (this.round[col] < (0-row) && this.round[row] < 0){
          this.star.push("A");
        }
        else if(this.round[col] > (0+row) && this.round[row] < 0){
          this.star.push("B");
        }
        else if(this.round[col] < (0-(n-row-1)) && this.round[row] > 0){
          this.star.push("C");
        }
        else if(this.round[col] > (0+(n-row-1)) && this.round[row] > 0){
          this.star.push("D");
        }
        else if(Math.abs(this.round[col]) == (0+row) || Math.abs(this.round[col]) == (0+(n-row-1))){
          this.star.push("+");
        }
        else{
          this.star.push("E");
        }
      }
      //console.log(this.star);
    }

  }

}
