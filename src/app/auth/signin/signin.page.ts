import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  constructor(private router:Router, private auth:AuthService) { }

  ngOnInit() {
    this.auth.user.subscribe(val=>{
      if(val==null){}
      else{
        console.log(val['providerData'][0]);
        this.router.navigate(['tabs']);
      }
    });
  }

  signIn(){
    this.auth.loginWithGoogle();
  }
}
