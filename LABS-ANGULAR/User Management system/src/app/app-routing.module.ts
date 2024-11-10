import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { UsersComponent } from "./users/users.component";
import { FormComponent } from "./form/form.component";
import { AuthGuard } from "./services/auth-guard.service";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },  // Redirect to login on root
    { path: "login", component: LoginComponent },
    {path:"register", component:RegisterComponent},
    { path: "employess", component: UsersComponent ,canActivate: [AuthGuard] },  // Corrected path
    { path: "form", component: FormComponent,canActivate: [AuthGuard] },  // Form for adding new user
    { path: "form/:id", component: FormComponent } , // Route for editing user with ID
    { path: "**", component:LoginComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
