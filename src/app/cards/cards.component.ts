import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  // Initializing variables
  users: User[] = [];
  showInfos: boolean[][] = [];
  mouseIn: boolean[][] = [];
  numberOfCards!: number;
  gender: string = '';
  sortBy = 'name-asc';

 //Injecting UserService and ActivatedRoute
  constructor(private userService: UserService, private route: ActivatedRoute) { }

  //Setting up variables and retrieving information from the API.
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.numberOfCards = +params['numCards'] || 20; // Set number of cards to display , 20 cards by default
      this.userService.getUsers(this.numberOfCards).subscribe(users => {  // Getytting users from service
        this.users = users;
        for (let i = 0; i < users.length; i++) {
          this.showInfos[i] = [false, false, false, false, false];
          this.mouseIn[i] = [false, false, false, false, false];
        }
      });
    });
  }

  // Methods

  //function which change the visibility of some information for a user card

  toggleInfo(i: number, j: number) {
    this.showInfos[i][j] = !this.showInfos[i][j];
  }

  //Function which sets the mouseIn to true when the mouse is hovering over a specific user card

  mouseEnter(i: number, j: number) {
    this.mouseIn[i][j] = true;
  }

  //Function which sets the mouseIn to false when the mouse leaves a specific card

  mouseLeave(i: number, j: number) {
    this.mouseIn[i][j] = false;
  }

  // Function which adds 10 more users to the existing list
  addTenPersons() {
    this.userService.getUsers(10).subscribe(users => {
      this.users = [...this.users, ...users];
      for (let i = this.users.length - 10; i < this.users.length; i++) {
        this.showInfos[i] = [false, false, false, false, false];
        this.mouseIn[i] = [false, false, false, false, false];
      }
    });
  }

  // Function which removes a user from the existing list
  deleteUser(i: number) {
    this.users.splice(i, 1);
  }

  // Function which gets users by gender and updates the list
  getUsersByGender() {
    if (this.gender === '') {
      // If no gender is selected, gets 20 random users
      this.userService.getUsers(20).subscribe((users) => {
        this.users = users;
      });
    } else {
      // If a gender is selected, gets users of that gender
      this.userService.getUsersByGender(this.gender).subscribe((users) => {
        this.users = users;
      });
    }
  }


  // Function which sorts the list of users by selecting sorting option
   sortUsers(): void {
    if (this.sortBy === 'name-asc') {
      // Sorts by first name in ascending order
      this.users.sort((a: any, b: any) => {
        return a.name.first.localeCompare(b.name.first);
      });
    } else if (this.sortBy === 'name-desc') {
      // Sorts by first name in descending order
      this.users.sort((a: any, b: any) => {
        return b.name.first.localeCompare(a.name.first);
      });
    } else if (this.sortBy === 'dob-asc') {
      // Sorts by birthday in ascending order
      this.users.sort((a: any, b: any) => {
        return new Date(a.dob.date).getTime() - new Date(b.dob.date).getTime();
      });
    }
  }


}
