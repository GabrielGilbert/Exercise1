import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.css']
})
export class Exercise1Component implements OnInit {

  secretPhrase: string;

  constructor() { }

  ngOnInit() {
    this.secretPhrase = 'The first Beslogic Angular exercise rocks!!';
  }

}
