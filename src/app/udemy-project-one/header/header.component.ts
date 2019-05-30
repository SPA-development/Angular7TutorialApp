import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  names: any;

  constructor(private _userService: UserService) { }

  ngOnInit() {
  }

  getNames() {
    this.names = this._userService.getNames().subscribe( names => console.log(names) );
  }

}
