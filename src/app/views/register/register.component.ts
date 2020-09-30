import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-component',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
   registerForm!: FormGroup;

  constructor(private fb: FormBuilder) {
  }


  ngOnInit() : void{
      this.registerForm = this.fb.group({
        firstname: [null, [Validators.required]],
        lastname: [null, [Validators.required]],
        email: [null, [Validators.required]],
        password: [null, [Validators.required]],
        confirmPassword: [null, [Validators.required]]
      });
  }


  onSubmit() {  }
}
