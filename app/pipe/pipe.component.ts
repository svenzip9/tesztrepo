import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {
  mintaSzoveg:string = "Angular pipeok na az mi?";
  mintaSzam:number = 523.68;
  szazalekErtek:number = 0.52556;
  szazalekErtek2:number = 1.10665;
  valutaErtek:number = 381.63;
  maiDatum:string = new Date().toString(); //Mai dátum lekérése és stringé alakítása. "2023-08-26 09:17:13"
}
