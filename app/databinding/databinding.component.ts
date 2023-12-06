import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  //Interpolacio
  interpolacio:string = "Egyszerű Adatkötés";

  //Property binding
  utvonal:string = "https://angular.io/";
  celpont:string = "_blank";
  keplink:string = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png";
  cim:string = "Angular";
  meret:number = 200;

  //Event binding
  uzenet():void{
    alert("Ez egy üzenet!");
  }

  //Two-way binding (FormsModule az app.module.ts-ben be kell írni!)
  a:number = 1;
}
