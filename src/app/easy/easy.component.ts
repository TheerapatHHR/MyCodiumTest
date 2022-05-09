import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-easy',
  templateUrl: './easy.component.html',
  styleUrls: ['./easy.component.css']
})
export class EasyComponent implements OnInit {

  @Input() index: number;
  @Output() numberSelected = new EventEmitter<void>();
  round = [1,2,3];


  constructor() { }

  ngOnInit(): void {

  }

  onSelected(x: number){
    this.index = x;
  }

}
