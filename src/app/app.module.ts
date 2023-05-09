import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import {HttpClientModule} from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { registerLocaleData } from '@angular/common';
import localeES from '@angular/common/locales/es';
import {LOCALE_ID } from '@angular/core';
import { ArticuloDetalleComponent } from './articulo-detalle/articulo-detalle.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {ArticuloCardComponent} from "./articulo-card/articulo-card.component";
import {ImageCarrouselComponent} from "./image-carrousel/image-carrousel.component";
import {CardsBannerComponent} from "./cards-banner/cards-banner.component";
import {ListaCategoriasComponent} from "./lista-categorias/lista-categorias.component";
import {FiltroCategoriaPipe} from "./pipes/filtro-categoria.pipe";


registerLocaleData(localeES);


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        ArticuloDetalleComponent,
        FooterComponent,
        HomeComponent,
        AboutComponent,
        ArticuloCardComponent,
        ImageCarrouselComponent,
        CardsBannerComponent,
        ListaCategoriasComponent,
        FiltroCategoriaPipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgbModule,
    ],
    providers: [
      { provide: LOCALE_ID, useValue: 'es-ES'}
    ],
    exports: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
