import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { LoginComponent } from "./login/login.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { FormComponent } from "./form/form.component";
import { CommonModule, NgClass, NgIf } from "@angular/common";
import { UsersComponent } from "./users/users.component";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
    declarations: [AppComponent, LoginComponent, FormComponent, UsersComponent],
    imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule, CommonModule, NgClass, NgIf],
    bootstrap: [AppComponent]
})
export class AppModule {

}