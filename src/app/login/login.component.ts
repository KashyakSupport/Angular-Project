import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Http } from '@angular/http';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public sup: any;
  title = 'login';
  public constructor(private location: Location, private http: Http, private router: Router) {
    this.sup = {
        'uname': '',
        'pass': '',
    };

}
public save() {
  if (this.sup.uname && this.sup.pass) {
       console.log('submit Post click happend' + this.sup);
     this.http.post('http://localhost:8080/api/user', JSON.stringify(this.sup))
     .subscribe(result => {
          this.location.back();
      });
      this.router.navigate(['/home']);
      console.log('submit Post click happend ' +  JSON.stringify(this.sup) );
  }


}
}