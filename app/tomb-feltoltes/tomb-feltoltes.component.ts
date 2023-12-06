import { Component } from '@angular/core';

@Component({
  selector: 'app-tomb-feltoltes',
  templateUrl: './tomb-feltoltes.component.html',
  styleUrls: ['./tomb-feltoltes.component.css']
})
export class TombFeltoltesComponent {
  nevek:string[] = [];
  nev:string = "";

  felvitel():void{
    this.nevek.push(this.nev);
  }
}
