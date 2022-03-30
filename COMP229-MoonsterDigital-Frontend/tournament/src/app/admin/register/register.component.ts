import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule }  from  '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TournamentRepo } from 'src/app/model/tournament.repository';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private repository: TournamentRepo) {
      this.createUserForm();
    }

    ngOnInit() {
      
    }

    createUserForm(){
      this.userForm = this.formBuilder.group({
        id: [],
        username: ['', Validators.required],
        password: ['', Validators.required],
        email: ['', Validators.required],
        displayName: ['', Validators.required]
      });
    }

    onSubmit() {
      console.log(this.userForm.value)
      this.repository.saveUser(this.userForm.value);
      this.router.navigate(['login']);
      // this.apiService.createUser(this.addForm.value)
      //   .subscribe( data => {
      //     this.router.navigate(['list-user']);
      //   });
    }

}
