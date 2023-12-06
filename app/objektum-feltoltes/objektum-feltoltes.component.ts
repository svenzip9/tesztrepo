import { Component } from '@angular/core';

@Component({
  selector: 'app-objektum-feltoltes',
  templateUrl: './objektum-feltoltes.component.html',
  styleUrls: ['./objektum-feltoltes.component.css']
})
export class ObjektumFeltoltesComponent {
  rsz:string = "";
  gy:string = "";
  hen:number = 0;

  autok:Auto[] = [];

  felvitel():void{
    var aktAuto:Auto = {
      rendszam: this.rsz,
      gyarto: this.gy,
      hengerurtartalom: this.hen
    };
    this.autok.push(aktAuto);
  }
}

export interface Auto{
  rendszam:string;
  gyarto:string;
  hengerurtartalom:number;
}
