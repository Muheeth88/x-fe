import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private restApiService: RestApiService, private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.formCreation();
  }

  formCreation() {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    })
  }

  login(form: FormGroup) {
    console.log(form.value)
    this.restApiService.login(form.value)
    .subscribe(
      (res: any) => {
        console.log(res);
        localStorage.setItem("JwtToken", res.token);
        localStorage.setItem("user", JSON.stringify(res.user))
        this.router.navigate(['/']);
      },
      (error: any) => {
        console.log("Wrong Credentials");
        window.alert("Wrong Creddentials!!")
      }
    )
  }

}
