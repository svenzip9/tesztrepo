import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooldalComponent } from './fooldal/fooldal.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule } from '@angular/forms';
import { OsszetettAdatComponent } from './osszetett-adat/osszetett-adat.component';
import { TombFeltoltesComponent } from './tomb-feltoltes/tomb-feltoltes.component';
import { Onallo1Component } from './onallo1/onallo1.component';
import { ObjektumFeltoltesComponent } from './objektum-feltoltes/objektum-feltoltes.component';
import { Onallo2Component } from './onallo2/onallo2.component';
import { PipeComponent } from './pipe/pipe.component';
import { Onallo3Component } from './onallo3/onallo3.component';
import { Onallo4Component } from './onallo4/onallo4.component';

@NgModule({
  declarations: [
    AppComponent,
    FooldalComponent,
    DatabindingComponent,
    ErrorComponent,
    OsszetettAdatComponent,
    TombFeltoltesComponent,
    Onallo1Component,
    ObjektumFeltoltesComponent,
    Onallo2Component,
    PipeComponent,
    Onallo3Component,
    Onallo4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    //Two-way bindig miatt!
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
