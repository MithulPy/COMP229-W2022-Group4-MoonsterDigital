import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/model/auth.service';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  displayName!: string;
  user: User|any;


  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.user = new User();

  }

  onLogoutClick(): void
  {
    this.authService.logout().subscribe(data => {
      this.router.navigate(['/login']);
    });
  }


  isLoggedIn(): boolean
  {
    this.displayName = this.authService.getDisplayName();
    const result = this.authService.authenticated;
    if (result)
    {
      this.user = JSON.parse(localStorage.getItem('user') || '{}');

      console.log(this.user);
    }
    return result;
  }
/* 
  isLoggedIn(): boolean
  {
    var loginCookie = localStorage.getItem('loginStatus')
    if(loginCookie=="1"){
      return true;

    }
    return false;
  } */
}
