import { Component, OnInit } from '@angular/core';
import { AppLibService } from '../Services/app-lib.service';
import { Router } from '@angular/router';
import { UserAccount } from '../Models/UserAccount';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  cmpnyName: string;
  username: string;
  password: string;
  ua: UserAccount;

  constructor(public applib: AppLibService, public router: Router) {
  }

  Login() {
   console.log(this.cmpnyName);
    this.applib.con
      .invoke('UserAccount_Login', this.cmpnyName, this.username, this.password)
      .then(x => {
        console.log(x);
        this.applib.loginUser = x;

        if (this.applib.loginUser !== undefined) {
            this.applib.SetLoginLocalStorage();
            const d = this.applib.userAccountList.find(y => y.LoginId === this.applib.loginUser.LoginId);
            if (d !== null) {
              if (this.applib.loginUser) {
                alert('Successfull');
             this.router.navigate(['/Menu/']);
               }
            }


         } else {
          alert('Invalid Credential');
          this.applib.RemoveLoginLocalStorage();
        }
      });
}

ngOnInit() {

}
}
