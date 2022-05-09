import { NumService } from './../numService.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-n31',
  templateUrl: './n31.component.html',
  styleUrls: ['../number3.component.css']
})
export class N31Component implements OnInit {
  num = null;
  star = [];
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
    this.round = [];
    for(let c = 1; c<=n; c++){
      this.round.push(c);
    }
    for(let i = 1; i<=n; i++){
      for(let j = 0; j<i; j++){
        this.star.push("*");
      }
      for(let z = n; z>i; z--){
        this.star.push(" ");
      }
      //document.write("\n");
    }
    //console.log(this.round);
  }

}
