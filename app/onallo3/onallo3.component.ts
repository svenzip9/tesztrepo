import { Component } from '@angular/core';

@Component({
  selector: 'app-onallo3',
  templateUrl: './onallo3.component.html',
  styleUrls: ['./onallo3.component.css']
})
export class Onallo3Component {
  tanulok:Tanulo[] = [
    {nev: "Kiss Ivan", kor: 18, aktiv: true, beiratkozas: "2022.05.01"},
    {nev: "Nagy Evelin", kor: 17, aktiv: true, beiratkozas: "2023.05.01"},
    {nev: "Kiss Katalin", kor: 21, aktiv: false, beiratkozas: "2019.05.01"}
  ];
}

export interface Tanulo{
  nev:string;
  kor:number;
  aktiv:boolean;
  beiratkozas:string;
}
