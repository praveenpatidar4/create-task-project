import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';
import { CardComponent } from "../shared/card/card.component";

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

interface User {
  id: string;
  avatar: string;
  name: string;
}
@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({required:true}) users!: User;
  @Input({required:true}) selected!: boolean;
  @Output() select = new EventEmitter()
  get imagePath() {
    return 'assets/users/' + this.users.avatar;
  }
  onSelectUser() {
    this.select.emit(this.users.id)
  }
  // selectedUser = DUMMY_USERS[randomIndex];
  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }
  // onSelectUser() {
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser = DUMMY_USERS[randomIndex];
  // }
  // using signal
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);
  // onSelectUser() {
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

  //   this.selectedUser.set(DUMMY_USERS[randomIndex]);
  // }
}
