import { AccountService } from './../_services/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {};
  loggedIn: Boolean = false;

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.getCurrentUser();
  }

  login() {
    this.accountService.login(this.model).subscribe(
      (response) => {
        console.log('Called login in nav.component.ts')
        console.log(response);
        this.loggedIn = true;
      },
      (error) => {
        console.log('error on login nav.component.ts');
        console.log(error);
      }
    );
  }

  logout() {
    this.accountService.logout();
    this.loggedIn = false;
  }

  getCurrentUser() {
    this.accountService.currentuser$.subscribe(
      (user) => {
        this.loggedIn = !!user;
      },
      (error) => {
        console.log('error on getCurrentUser nav.component.ts');
        console.log(error);
      }
    );
  }
}
