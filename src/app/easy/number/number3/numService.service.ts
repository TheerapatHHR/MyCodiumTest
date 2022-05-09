import { EventEmitter } from '@angular/core';
export class NumService{
  num = null;

  numUpdated = new EventEmitter<number>();

  receiceNum(receive: number){
    this.num = receive;
  }
}
