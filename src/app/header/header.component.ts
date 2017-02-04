import { AuthService } from './../shared/service/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'ref-fil-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnDestroy {

  isAuthenticated = false;
  private sub: Subscription;

  constructor(private authService: AuthService) {
    // this.sub = this.authService.isAuthenticated().subscribe(
    //   authStatus => this.isAuthenticated = authStatus
    // );
  }

  isAuth(): boolean {
    return this.isAuthenticated;
  }

  onLogout(): void {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
