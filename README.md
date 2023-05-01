
# App

This project is a simple web application built with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.7.
It allows users to view and manage a list of contacts.


# Prerequisites

Before running this application, please ensure that you have the following installed on your machine: 
  Node.js (version 14.15.0 or higher)
  Angular CLI (version 15.2.7)

# Features
-Choose a number of users to display , or 20 by default
-Displays multiple user cards (number choosen or 20) at the same time
-View a list of users with their informations such as their name, email, phone number, birthday,  address and profile pictures
-Add 10 persons
-Delete a specific user card
-Fnilter the list of users by gender
-Sort the list of users by name or date of birth


## Screenshots

Here are some screenshots of the application:

![Home Page](/app-screenshots/App-Home.png)
*The home page where we can choose number of cards to display.*

![Page with 5 user Cards](/app-screenshots/App-5Cards.png)
*Displays the chosen number of user cards (or 20 by default)..*

![Page which displays multiple user cards](/app-screenshots/App-Cards.png)
*Users can Displays 10 cards moe then the number choosen in the first timz by clicking in the button (Add 10 users more).*

![Page showing user's email  ](/app-screenshots/App-Card-info.png)
*Users can see informations of contact by clicking the button he wants under their picture (email in this screenshot).*


## Development server and Run application

Please navigate to the 'app' folder and run the command 'npm install' to install the necessary dependencies for the project

Than run `ng serve --open`  The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
