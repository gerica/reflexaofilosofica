import { Router } from '@angular/router';
import { AuthService } from './../shared/service/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'ref-fil-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnDestroy, OnInit {

  isAuthenticated = false;
  private sub: Subscription;

  constructor(private authService: AuthService,
    private route: Router) {
  }

  isAuth(): boolean {
    return this.isAuthenticated;
  }

  onLogout(): void {
    this.authService.logout()
      .then(() => this.route.navigate(['home'])
      );    
  }

  ngOnInit() {
    this.sub = this.authService.getAuth().subscribe(
      authStatus => {
        if (authStatus) {
          this.isAuthenticated = true;
        } else {
          this.isAuthenticated = false;
        }        
      }
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
