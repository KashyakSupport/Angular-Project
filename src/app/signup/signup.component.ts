import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Http } from '@angular/http';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit  {
    public user: any;
   
    public constructor(private location: Location, private http: Http, private router: Router) {
        this.user = {
            'key': '',
            'lname': '',
            'uname': '',
            'pass': '',
            'email': '',

        };

    }

    public ngOnInit() { }

    public save() {
        if (this.user.email && this.user.pass) {
             console.log('submit Post click happend' + this.user);
           this.http.post('http://localhost:8080/api/user', JSON.stringify(this.user))
           .subscribe(result => {
                this.location.back();
            });
            this.router.navigate(['/login']);
            console.log('submit Post click happend ' +  JSON.stringify(this.user) );
        }
   

}
}
