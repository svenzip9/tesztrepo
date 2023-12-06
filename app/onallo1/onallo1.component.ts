import { Component } from '@angular/core';

@Component({
  selector: 'app-onallo1',
  templateUrl: './onallo1.component.html',
  styleUrls: ['./onallo1.component.css']
})
export class Onallo1Component {
  elem:string = "";
  bevasarlolista:string[] =[];
  
  felvitel():void{
    this.bevasarlolista.push(this.elem);
  }
}
