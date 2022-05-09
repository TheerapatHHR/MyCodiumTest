import { Component, Input, OnInit } from '@angular/core';
import { NumService } from './numService.service';

@Component({
  selector: 'app-number3',
  templateUrl: './number3.component.html',
  styleUrls: ['./number3.component.css'],
  providers: [NumService]
})
export class Number3Component implements OnInit {
  @Input() number:number;
  num = null;


  constructor(private service:NumService) { }

  ngOnInit(): void {
  }

  onProcess(){
    this.num = this.number;
    this.service.receiceNum(this.num);
    this.service.numUpdated.emit(this.num);
  }

}
