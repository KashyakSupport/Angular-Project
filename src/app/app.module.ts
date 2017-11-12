import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
// import { MaterialModule } from '@angular/material';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import 'hammerjs';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { MatCheckboxModule,
        MatToolbarModule,
        MatInputModule,
        MatIconModule,
        MatCardModule,
        MatButtonModule,
        MatListModule,
        MatTableModule,
        MatDialogModule} from '@angular/material';
  // Routing the pages
 const AppRoutes: Routes = [
          { path: '', component: SignupComponent },
          { path: 'login' , component: LoginComponent },
          { path: 'home' , component: HomeComponent},
      ];

@NgModule({
  declarations: [
    AppComponent,
   SignupComponent,
    LoginComponent,
    HomeComponent
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
    MatTableModule,
    RouterModule,
    RouterModule.forRoot(AppRoutes),
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
