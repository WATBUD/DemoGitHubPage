import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-black-hole',
  templateUrl: './black-hole.component.html',
  styleUrls: ['./black-hole.component.scss']
})
export class BlackHoleComponent implements OnInit {

  triArray=[];
  constructor() {
   
    for (let index = 0; index < 200; index++) {
      //const element = array[index];
      this.triArray.push(1);
    }
  }

  ngOnInit() {
  }

}
