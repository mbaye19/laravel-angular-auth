import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JarwisService } from 'src/app/Services/jarwis.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form = {
    email : null,
    name : null,
    password : null,
    password_confirmation : null
  }

  public error = [];

  constructor(private Jarwis:JarwisService) { }

  onSubmit(){
    this.Jarwis.signup(this.form).subscribe(
      data => console.log(data),
      error => this.handleError(error)
    );
  }

  handleError(error) {
    this.error = error.error.errors;
  }

  ngOnInit() {
  }

}
