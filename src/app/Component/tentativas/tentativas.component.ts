import { Component,  Input, OnChanges, OnInit } from '@angular/core';
import { Coracao } from "./../../Shared/coracao.model";

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})

export class TentativasComponent implements OnInit, OnChanges {
  //por property binding - ele muda uma tag do html
  //devem ser colocados os colchetes na tag que recebe o valor 
  // no componente html colocar <img [src] =.....
  //public cc: string = '/assets/images/cc.png'
  //public cv: string = '/assets/images/cv.png'

  @Input() public tentativas: number

  public coracoes: Coracao[] = [ new Coracao(true), new Coracao(true), new Coracao(true)] 

  constructor() { 
    
  }

  ngOnChanges(): void{

    if(this.tentativas !== this.coracoes.length && this.tentativas >= 0)
    {
      let indice = this.coracoes.length - this.tentativas
      this.coracoes[indice - 1].isCheio = false
    }
   
  }

  ngOnInit(): void {
    //console.log('tenttativas recebidas de foora ' + this.tentativas)
  }

}
