import { Component } from '@angular/core';
import { UserShowServices } from '../services/user-show.services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrl: './user-show.component.scss'
})
export class UserShowComponent {
clicked!: boolean;

  constructor(
    private route: ActivatedRoute,
    private userShowServices: UserShowServices
  ) {}

  id = +this.route.snapshot.params['id'];
  user = this.userShowServices.getUser(this.id);

  onImgClick() {
    this.clicked = (this.clicked)? false : true;
  }
}
