import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SidebarModule } from './sidebar/sidebar.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { PedidosService } from './pedidos/services/pedidos.service';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table' 



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SidebarModule,
    PedidosModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule,
    AngularMaterialModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [PedidosService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
