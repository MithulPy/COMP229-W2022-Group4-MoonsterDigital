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

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    
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
    return this.authService.authenticated;
  }
}
