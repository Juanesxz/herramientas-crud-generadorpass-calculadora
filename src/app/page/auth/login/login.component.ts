import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {

  formlogin!: FormGroup;
  form = inject(FormBuilder)
  router = inject(Router)


  constructor() {
    this.formlogin = this.form.group({
      username: ["", [Validators.required]],
      pass: ["", [Validators.required]],
    })
  }


  login() {
    console.log(this.formlogin.value);
    if (this.formlogin.valid) this.router.navigate(["/dashboard"])

  }




}
