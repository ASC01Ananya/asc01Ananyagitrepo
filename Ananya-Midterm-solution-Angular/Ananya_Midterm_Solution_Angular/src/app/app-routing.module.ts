import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { FormComponent } from "./form/form.component";
import { AuthGuard } from "./services/auth-guard.service";
import { IssuesComponent } from "./issues/issues.component";

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },  // Redirection!!!
    { path: "login", component: LoginComponent },
    { path: "issues", component: IssuesComponent, canActivate: [AuthGuard] },
    { path: "form", component: FormComponent, canActivate: [AuthGuard] },
    { path: "form/:id", component: FormComponent },
    { path: "**", component: LoginComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
