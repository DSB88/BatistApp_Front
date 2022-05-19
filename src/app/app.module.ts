import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./components/template/header/header.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { FooterComponent } from "./components/template/footer/footer.component";
import { NavComponent } from "./components/template/nav/nav.component";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { HomeComponent } from "./components/views/home/home.component";
import { MatCardModule } from "@angular/material/card";
import { DevocionalReadComponent } from "./components/views/devocional/devocional-read/devocional-read.component";
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { DevocionalCreateComponent } from "./components/views/devocional/devocional-create/devocional-create.component";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { DevocionalDeleteComponent } from './components/views/devocional/devocional-delete/devocional-delete.component';
import { DevocionalUpdateComponent } from './components/views/devocional/devocional-update/devocional-update.component';
import { EventosReadAllComponent } from "./components/views/eventos/eventos-read-all/eventos-read-all.component";
import { EventosCreateComponent } from './components/views/eventos/eventos-create/eventos-create.component';
import { EventosDeleteComponent } from './components/views/eventos/eventos-delete/eventos-delete.component';
import { EventosUpdateComponent } from './components/views/eventos/eventos-update/eventos-update.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    DevocionalReadComponent,
    DevocionalCreateComponent,
    DevocionalDeleteComponent,
    DevocionalUpdateComponent,
    EventosReadAllComponent,
    EventosCreateComponent,
    EventosDeleteComponent,
    EventosUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
