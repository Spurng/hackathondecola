import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DepoimentosPageComponent } from './components/depoimentos-page/depoimentos-page.component';
import { AjudaPageComponent } from './components/ajuda-page/ajuda-page.component';
import { MenuTemplateComponent } from './components/menu-template/menu-template.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { DepoimentoCardComponent } from './components/depoimento-card/depoimento-card.component';
import { LeisPaginaComponent } from './components/leis-pagina/leis-pagina.component';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    MenuTemplateComponent,
    HomePageComponent,
    DepoimentosPageComponent,
    DepoimentoCardComponent,
    LeisPaginaComponent,
    AjudaPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserModule,
    FormsModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
