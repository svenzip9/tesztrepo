import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooldalComponent } from './fooldal/fooldal.component';
import { ErrorComponent } from './error/error.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { OsszetettAdatComponent } from './osszetett-adat/osszetett-adat.component';
import { TombFeltoltesComponent } from './tomb-feltoltes/tomb-feltoltes.component';
import { Onallo1Component } from './onallo1/onallo1.component';
import { ObjektumFeltoltesComponent } from './objektum-feltoltes/objektum-feltoltes.component';
import { Onallo2Component } from './onallo2/onallo2.component';
import { PipeComponent } from './pipe/pipe.component';
import { Onallo3Component } from './onallo3/onallo3.component';
import { Onallo4Component } from './onallo4/onallo4.component';

const routes: Routes = [
  {path: "fooldal", component: FooldalComponent},
  {path: "databinding", component: DatabindingComponent},
  {path: "osszetettadat", component: OsszetettAdatComponent},
  {path: "tombfeltoltes", component: TombFeltoltesComponent},
  {path: "onallo1", component: Onallo1Component},
  {path: "objektumfeltoltes", component: ObjektumFeltoltesComponent},
  {path: "onallo2", component: Onallo2Component},
  {path: "pipe", component: PipeComponent},
  {path: "onallo3", component: Onallo3Component},
  {path: "onallo4", component: Onallo4Component},

  {path:"", redirectTo: "/fooldal", pathMatch:"full"},

  {path:"**", component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
