import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserApp } from 'src/app/interface/userApp';
import { UserService } from 'src/app/services/user.service';
import { tap, map, take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  public user$: UserApp;
  public isAdmin: boolean ;
  public isCliente=true;
  public isEmpleado: boolean;
  public userUid: string;
  constructor(public authSvc:UserService,private router: Router ) { 
}

  ngOnInit(): void{
    this.authSvc.user$.subscribe((user: UserApp) => {
      this.user$ = user;
      console.log(this.user$);
      if(this.user$!= null){
        this.userUid = this.user$.uid;
        this.authSvc.isUserAdmin(this.userUid).subscribe(userRole => {
          console.log('userheader' + userRole.role);
          switch (userRole.role) {
            case 'ADMIN':
              this.isAdmin = true;
              this.isCliente = false;
              this.isEmpleado = false;
              break;
            case 'CLIENTE':
              this.isCliente = true;
              this.isAdmin = false;
              this.isEmpleado = false;
              break;
            case 'EMPLEADO':
              this.isEmpleado = true;
              this.isCliente = false;
              this.isAdmin = false;
              break;

            default:
              this.isCliente = true;
              this.isAdmin = false;
              this.isEmpleado = false;

          }});
      } else {
        this.isCliente = true;
        this.isAdmin = false;
        this.isEmpleado = false;
        this.userUid=null;
      }
      



    });


   /* this.isCliente = true;
        this.isAdmin = false;
        this.isEmpleado = false;
   //this.getCurrentUser();
    this.authSvc.user$.subscribe(auth => {
      if (auth) {
        this.userUid = auth.uid;
        this.authSvc.isUserAdmin(this.userUid).subscribe(userRole => {
          console.log('userheader' + userRole.role);
          switch (userRole.role) {
            case 'ADMIN':
              this.isAdmin = true;
              this.isCliente = false;
              this.isEmpleado = false;
              break;
            case 'CLIENTE':
              this.isCliente = true;
              this.isAdmin = false;
              this.isEmpleado = false;
              break;
            case 'EMPLEADO':
              this.isEmpleado = true;
              this.isCliente = false;
              this.isAdmin = false;
              break;

            default:
              this.isCliente = true;
              this.isAdmin = false;
              this.isEmpleado = false;

          }});
      } else {
        this.isCliente = true;
        this.isAdmin = false;
        this.isEmpleado = false;
      }
    });*/

  }
/*  getCurrentUser() {
    this.authSvc.isAuth().subscribe(auth => {
      if (auth) {
        this.userUid = auth.uid;
        this.authSvc.isUserAdmin(this.userUid).subscribe(userRole => {
          console.log('userheader' + userRole.role);
          switch (userRole.role) {
            case 'ADMIN':
              this.isAdmin = true;
              this.isCliente = false;
              this.isEmpleado = false;
              break;
            case 'CLIENTE':
              this.isCliente = true;
              this.isAdmin = false;
              this.isEmpleado = false;
              break;
            case 'EMPLEADO':
              this.isEmpleado = true;
              this.isCliente = false;
              this.isAdmin = false;
              break;

            default:
              this.isCliente = true;
              this.isAdmin = false;
              this.isEmpleado = false;

          }
          /*if(userRole.role= 'ADMIN'){
            console.log('if'+userRole.role);
            this.isAdmin = true;
            this.isCliente = null;
            this.isEmpleado = null;
          }else if()
 
 
 
         // this.isAdmin = Object.assign({}, 'ADMIN').hasOwnProperty('ADMIN');
          console.log('userheader'+this.isAdmin);
          //this.isAdmin = true;
        });
      } else {
        this.isCliente = true;
        this.isAdmin = false;
        this.isEmpleado = false;
      }
    })
  }*/
  async onLogout() {
    try {
      await this.setView();
      await this.authSvc.logout();
      window.location.reload();
      this.router.navigateByUrl('/main');
     // this.router.navigate(['/main']);
    } catch (error) {
      console.log(error);
    }
  }
  setView() {
    this.user$=null;
       this.isAdmin = false;
      this.isCliente = true;
      this.isEmpleado = false;
      this.userUid=null;
     
  }
}
