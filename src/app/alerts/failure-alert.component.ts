import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-failure',
  template: `
      <p>Oh no!
      Something went wrong!<p>
  `,
  styles: [`
      p {
          background: red;
          width: 50%;
      }
  `]
})
export class FailureComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
