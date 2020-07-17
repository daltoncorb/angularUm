import { Component, OnInit } from '@angular/core';
import { Coracao } from "./../../Shared/coracao.model";

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {
  //por property binding - ele muda uma tag do html
  //devem ser colocados os colchetes na tag que recebe o valor 
  // no componente html colocar <img [src] =.....
  public cc: string = '/assets/images/cc.png'
  public cv: string = '/assets/images/cv.png'

  public coracoes: Coracao[] = [ new Coracao(true), new Coracao(true), new Coracao(true)] 

  constructor() { 
    //console.log(this.coracoes)
  }

  ngOnInit(): void {
  }

}
