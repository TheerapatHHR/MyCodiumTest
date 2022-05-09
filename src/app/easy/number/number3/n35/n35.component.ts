import { Component, OnInit } from '@angular/core';
import { NumService } from '../numService.service';

@Component({
  selector: 'app-n35',
  templateUrl: './n35.component.html',
  styleUrls: ['../number3.component.css']
})
export class N35Component implements OnInit {

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
    if(n%2 == 0){
      for(let c = 0; c<(n-1); c++){
        this.cols.push(c);
      }
      //console.log(this,this.cols);
    }
    else{
      for(let c = 0; c<n; c++){
        this.cols.push(c);
      }
    }


    let half;
    if(n%2 == 0){
      half = (n/2);

      for(let i = 0; i<half; i++ ){
    for(let j = half-1; j>i; j--){
      this.star.push(" ");
    }
    for(let j = 0; j<=(2*i); j++){
        this.star.push("*");
    }
    for(let j = half-1; j>i; j--){
      this.star.push(" ");
    }
    //console.log(this.star);
  }

  for(let i = 0; i<half; i++ ){
    for(let j = 0; j<i; j++){
      this.star.push(" ");
    }
    if(n%2 != 0){
        for(let j = (n-(2*(i+1))); j>0; j--){
          this.star.push("*");
      }
    }
    else{
        n = n+1;
        for(let j = (n-(2*(i+1))); j>0; j--){
          this.star.push("*");
      }
    }

    for(let j = 0; j<i; j++){
      this.star.push(" ");
    }
  }


  //console.log(this.star);
  }



//odd number
    else{
        half = (n-1)/2;
        for(let i = 0; i<=half; i++ ){
      for(let j = half; j>i; j--){
        this.star.push(" ");
      }
      for(let j = 0; j<=(2*i); j++){
          this.star.push("*");
      }
      for(let j = half; j>i; j--){
        this.star.push(" ");
      }

    }

    for(let i = 0; i<half; i++ ){
      for(let j = 0; j<=i; j++){
        this.star.push(" ");
      }
      if(n%2 != 0){
          for(let j = (n-(2*(i+1))); j>0; j--){
            this.star.push("*");
        }
      }
      else{
          n = n+1;
          for(let j = (n-(2*(i+1))); j>0; j--){
            this.star.push("*");
        }
      }

      for(let j = 0; j<=i; j++){
        this.star.push(" ");
      }

    }
    }
    //console.log(this.star);
  }
}
