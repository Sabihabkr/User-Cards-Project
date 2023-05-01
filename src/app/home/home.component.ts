import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  numberOfCards : number = 0;

  constructor(private router: Router) { }

  // function to submit the form data entered in the form
  onSubmit() {
    // Navigating to cards route with query parameters
    this.router.navigate(['/cards'], { queryParams: { numCards: this.numberOfCards } });
  }

}
