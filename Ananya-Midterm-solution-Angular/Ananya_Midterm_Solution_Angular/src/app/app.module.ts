import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { LoginComponent } from "./login/login.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { CommonModule, NgClass, NgFor, NgIf } from "@angular/common";
import { IssuesComponent } from "./issues/issues.component";
import { FormComponent } from "./form/form.component";


@NgModule({
    declarations: [AppComponent, LoginComponent,IssuesComponent,FormComponent],
    imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule, CommonModule, NgClass, NgIf,NgFor],
    bootstrap: [AppComponent]
})
export class AppModule {

}