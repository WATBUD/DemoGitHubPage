import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-TableDemo1',
  templateUrl: './TableDemo1.html',
  styleUrls: ['./TableDemo1.css']
})
export class TableDemo1Component implements OnInit {
  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {

  }

}
