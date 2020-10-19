import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomizeMessageService } from 'src/app/services/customize-message.service';

/**
 * Login component.
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  /**
   * @ignore
   */
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private customizeMessageService: CustomizeMessageService,
  ) { }

  /**
   * @ignore
   */
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required])],
    });
  }

  submitForm() {
    const value = this.loginForm.getRawValue();
    console.log(value);
    this.router.navigate(['menu']);
  }

  clickNew() {
    this.router.navigate(['new']);
  }

  forgotPassword() {
    this.customizeMessageService.showMessage('Aviso', 'Esqueci minha senha!', 'Ok');
  }

}
