import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-container',
  template:
      `
        <h1>Selector Types: Attribute, element, & class</h1>
        app-alert-container works!
        <hr>
        <div app-success></div>
        <app-warning></app-warning>
        <div class="app-failure"></div>
      `
})
export class AlertContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
