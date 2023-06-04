import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { UserApp } from 'src/app/interface/userApp';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  user : UserApp;
  constructor(private userService: UserService,private router: Router) { 
       
      this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })}

  ngOnInit(): void {
  }
  onSubmit() {
    console.log('login');
    
 this.userService.login(this.formLogin.value).then(response => {
        console.log(response);
        this.user=response;
        console.log('user'+JSON.stringify( this.user));
        this.router.navigate(['/main']);
      })
      .catch(error => console.log(error));

    
  }

  private checkUserIsVerified(user: UserApp) {
    if (user) {
      this.router.navigate(['/main']);
    } 
     else {
      this.router.navigate(['/registro']);
    }
  }

}
