import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styles: [
    `
        .white-text {
          color: white;
        }
    `
  ]
})
export class ToggleComponent implements OnInit {

  public toggleValue = false;
  public btnClicks: Array<number> = [];

  constructor() { }

  ngOnInit() {
  }

  public toggleFunc() {
    this.toggleValue = !this.toggleValue;
    this.btnClicks.push(this.btnClicks.length + 1);
  }

}
