import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;
  
  constructor(private restApiService: RestApiService, private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.formCreation()
  }

  formCreation() {
    this.registrationForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
      userName: ["", Validators.required]
    })
  }

  register(form: FormGroup) {
    console.log(form.value)
    this.restApiService.register(form.value)
    .subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(["/", "auth", "login"])
      },
      (err:any) => {
        console.log(err);
        console.log("something went wrong in ts!")
      }
    )
  }
}
