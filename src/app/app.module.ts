import { SharedModule } from './shared/shared.module';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//-----------configuración del local lenguaje---------------//
import localEsCo from "@angular/common/locales/es-CO";
import { registerLocaleData } from "@angular/common";
registerLocaleData(localEsCo);
//---------------------------------------------------------//

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [
    provideClientHydration(),
    {
      provide: LOCALE_ID, useValue: 'es-CO' //Se cambia el idioma para los PIPES
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
