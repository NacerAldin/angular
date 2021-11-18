import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerUser(form:NgForm){
    var test =JSON.stringify(form.value);

    console.log(test);

  }

  constructor() { }

  ngOnInit(): void {
  }

}
