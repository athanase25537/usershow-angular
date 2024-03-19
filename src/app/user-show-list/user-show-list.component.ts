import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserShowServices } from '../services/user-show.services';

@Component({
  selector: 'app-user-show-list',
  templateUrl: './user-show-list.component.html',
  styleUrl: './user-show-list.component.scss'
})
export class UserShowListComponent implements OnInit {
  
  users!: User[];

  constructor(private userShowServices: UserShowServices) {}

  ngOnInit(): void {
    this.users = this.userShowServices.getAllUsers(); 
  }
}