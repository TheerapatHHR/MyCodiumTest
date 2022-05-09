import { Component, OnInit } from '@angular/core';
import { NumService } from '../numService.service';

@Component({
  selector: 'app-n34',
  templateUrl: './n34.component.html',
  styleUrls: ['../number3.component.css']
})
export class N34Component implements OnInit {

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
    for(let c = 0; c<(n); c++){
      this.cols.push(c);
    }

    for(let i = 0; i<(this.rows.length); i++ ){
      for(let j = 0; j<(this.cols.length); j++){
        if(i+j == (n-1) || (((n-1)*i)+(i+j)) % (n+1) == 0){
          this.star.push("*");
        }

        else{
          this.star.push(" ");
        }
      }
    }
    //console.log(this.star);

  }

}
