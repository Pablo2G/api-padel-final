import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/users.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public token = null;
  public identity = null;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.identity = this.userService.getIdentity();
    this.token = this.userService.getToken();
  }

}
