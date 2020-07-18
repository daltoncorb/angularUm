import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FRASES } from "./frases-mock";
import { Frase } from "./../../Shared/frase.model";

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  public frases: Array<Frase> = FRASES
  public instrucao: string = 'Traduza a frase abaixo:'
  public Resposta: string = ''

  public tentativas: number = 3
  public rodada: number = 0
  public progressoBar: number = 0

  public rodadaFrase: Frase

  //pode-se especificar o tipo do eventMitter
  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()
  // ou pode-se fazer assim
  //@Output() public encerrarJogo = new EventEmitter()

  constructor() {
    //this.rodadaFrase = this.frases[this.rodada]
    this.atualizarRodada()
  }

  ngOnInit(): void {
  }

  public atualizarResposta(resposta: Event): void {
    this.Resposta = (<HTMLInputElement>resposta.target).value
    //console.log(this.Resposta)
  }

  public verificarResposta(): void {
    //vai verificar a resposta

    if (this.Resposta.toLowerCase() == this.rodadaFrase.frasePt.toLowerCase()) {
      alert('Você acertou a Resposta!')
      this.rodada++
      this.progressoBar += (100 / this.frases.length)

      if (this.rodada > this.frases.length - 1) {
        //sucesso terminou o jogo
        this.rodada = 0
        this.rodadaFrase = this.frases[0]
        this.encerrarJogo.emit('vitoria')
      }
      else
        this.atualizarRodada()
    }
    else {
      this.tentativas--

      if (this.tentativas < 0){
        alert('Suas chances acabaram.\nVocê errou muito!')
        this.encerrarJogo.emit('derrota')
      }
      else
        alert('Você errou a resposta.\nTente novamente! ')
    }
  }

  public atualizarRodada(): void {
    this.rodadaFrase = this.frases[this.rodada]
    this.Resposta = ''
  }



}

