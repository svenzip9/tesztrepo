import { Component } from '@angular/core';

@Component({
  selector: 'app-osszetett-adat',
  templateUrl: './osszetett-adat.component.html',
  styleUrls: ['./osszetett-adat.component.css']
})
export class OsszetettAdatComponent {
  //Tömbök
  bevasarlolista:string[] = ["alma", "körte", "banán", "víz"];
  szamok:number[] = [3,13,21,42,69,11,21,-5];
  logikai:boolean[] = [true, true, false, true, false, false];
  barmilyen:any[] = ["alma", 42, true];


  //Objektum interfész alapján
  dolgozo:Dolgozo = {nev: "Kiss Lajos", kor: 23, aktiv: true}

  //Objektum tömb
  dolgozok:Dolgozo[] = [
    {nev: "Nagy Adrien", kor:32, aktiv: false},
    {nev: "Kovacs Laszlo", kor:26, aktiv: true},
    {nev: "Juhasz Istvan", kor:46, aktiv: true}
  ];
}

export interface Dolgozo{
  nev:string;
  kor:number;
  aktiv:boolean;
}

