import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
//import { MaterialModule } from '@angular/material';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http'
import 'hammerjs';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { AvailableRoutes } from './app.routing';
import { RouterModule } from '@angular/router';
import{MatCheckboxModule,MatToolbarModule ,MatInputModule,MatIconModule,MatCardModule,MatButtonModule,MatListModule,MatDialogModule} from '@angular/material'

@NgModule({
  declarations: [
    AppComponent,
   SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule,
    RouterModule,
    RouterModule.forRoot(AvailableRoutes),
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
