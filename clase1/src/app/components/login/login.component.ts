import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({
    usernameInput: new FormControl(''),
    passwordInput: new FormControl('')
  });

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  mockClickHandler() {
    this.form.patchValue({
      usernameInput: 'Admin',
      passwordInput: 'admin'
    })
  }

  submit() {
    if (this.form.value.usernameInput === 'Admin' &&
      this.form.value.passwordInput === 'admin') {
      this.router.navigate(['bienvenido'], { relativeTo: this.route });
    } else {
      this.router.navigate(['error'], { relativeTo: this.route });
    }
  }

}
