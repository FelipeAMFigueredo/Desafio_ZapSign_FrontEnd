import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DocumentCreateComponent } from './document-create/document-create.component'; 
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';  // Importando o módulo de roteamento

@NgModule({
  declarations: [
    AppComponent,
    DocumentCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
