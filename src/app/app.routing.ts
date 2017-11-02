import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from "./login/login.component";

export const AvailableRoutes: any = [
 
    { path: "", component: SignupComponent },
    { path: "login", component: LoginComponent }
];