import { AuthService } from './../shared/service/auth.service';
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';


@Component({
  selector: 'ref-fil-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.less']
})
export class SigninComponent implements OnInit {

  myForm: FormGroup;
  error = false;
  errorMessage = '';

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private route: Router) { }


  onSignin(event: any) {
    event.preventDefault();

    this.authService.signinUser(this.myForm.value)
      .then(
      result => {
        console.log(result);
        // localStorage.setItem('user', result.token);
        this.route.navigate(['cadastro']);
      },
      error => {
        console.log(error);
      }
      );
    // this.route.navigate(['protected']);
  }

  ngOnInit(): any {
    this.myForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}