import { UserComponent } from './component/user/user.component';
import { HeaderComponent } from './component/header/header.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DUMMY_USERS } from '../app/dummy-users';
import { TasksComponent } from './component/tasks/tasks.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  activeUser: boolean = false
  selectedUserId?: string;
  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }
  onSelectUser(id: string) {
this.activeUser = !this.activeUser
    this.selectedUserId = id;
  }
}
