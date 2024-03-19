import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserShowServices } from '../services/user-show.services';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  @Input() user!: User;

  constructor(
    private userShowServices: UserShowServices,
    private router: Router) {}

  onShow () {
    this.router.navigateByUrl(`/show-user/${ this.user.id }`);
  }
  
}

