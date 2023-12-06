import { Component } from '@angular/core';

@Component({
  selector: 'app-onallo2',
  templateUrl: './onallo2.component.html',
  styleUrls: ['./onallo2.component.css']
})
export class Onallo2Component {

  //Adat felvitel kódrész
  nev:string = "";
  kor:number = 0;
  felveteldatum:string = "ÉÉÉÉ . HH . NN";

  tanulok:Tanulo[] = [];

  felvetel():void{
    var aktNev:Tanulo = {
      nev: this.nev,
      kor: this.kor,
      felvetelDatum: this.felveteldatum
      
    };
    this.tanulok.push(aktNev);
  }

  
  atlagKor:number = 0;

  atlagKorSzamitas():void{
    for(var i:number = 0; i < this.tanulok.length; i++){
      this.atlagKor += Number(this.tanulok[i].kor);
    }

    this.atlagKor /= this.tanulok.length;
  }
}

export interface Tanulo{
  nev:string;
  kor:number;
  felvetelDatum:string;
}
