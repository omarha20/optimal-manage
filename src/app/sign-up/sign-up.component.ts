import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, RouterModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit {
constructor(private fb: FormBuilder) {}
public signup!: FormGroup;
ngOnInit() {
  this.signup = this.fb.group({
    name: this.fb.control('', [Validators.required]),
    lname: this.fb.control('', [Validators.required]),
    mail: this.fb.control('', [Validators.required]),
    pass: this.fb.control('', [Validators.required])
  })
}
}
