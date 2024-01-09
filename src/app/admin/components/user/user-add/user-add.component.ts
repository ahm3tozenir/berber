import { Component, OnInit } from '@angular/core';
import { User } from '../../../../models/user';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-user-add',
  standalone: true,
  imports: [],
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.scss',
})
export class UserAddComponent implements OnInit {
  userData = {
    id: 10,
    createdAt: null,
    createdUser: null,
    updatedAt: null,
    updatedUser: null,
    isUpdated: false,
    deletedAt: null,
    deletedUser: null,
    isDeleted: false,
    imageUrl: 'deneme.png',
    firstName: 'Memati',
    lastName: 'Baş',
    email: 'memati_bas@sagolera.com',
    password: 'birdendokuza',
  };
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.createUser(this.userData);
  }
  createUser(userData: User) {
    return this.userService
      .createUser(userData)
      .subscribe((res) => console.log(res));
  }
}
