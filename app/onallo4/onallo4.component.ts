import { Component } from '@angular/core';

@Component({
  selector: 'app-onallo4',
  templateUrl: './onallo4.component.html',
  styleUrls: ['./onallo4.component.css']
})
export class Onallo4Component {
  megnevezes:string = "";
  cikszam:number = 0;
  ar:number = 0;
  keszleten:boolean = false;

  laptopok:Laptop[] = [];

  felvitel():void{
    var aktLaptop:Laptop = {
      megnevezes: this.megnevezes,
      cikszam: this.cikszam,
      ar: this.ar,
      keszlet: this.keszleten
    };
    this.laptopok.push(aktLaptop);
  }
}

export interface Laptop{
  megnevezes:string;
  cikszam:number;
  ar:number;
  keszlet:boolean;
}
