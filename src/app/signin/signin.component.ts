import { AlertaUtil } from './../shared/component/alerta-util';
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

  alertaUtil: AlertaUtil = new AlertaUtil();
  myForm: FormGroup;
  error = false;
  errorMessage = '';

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private route: Router) {

  }

  onSignin(event: any) {
    event.preventDefault();

    this.authService.login(this.myForm.value)
      .then(
      result => {
        this.route.navigate(['cadastro']);

      }, error => {
        this.alertaUtil.addMessage({
          type: 'danger',
          closable: true,
          msg: error
        });
      });
  }

  ngOnInit(): any {
    this.myForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

}