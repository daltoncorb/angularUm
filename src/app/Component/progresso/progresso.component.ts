import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit, OnChanges  {

  @Input('valor') public progressoBarra: number = 0
  public vValue: string

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(data) {
    this.progressoBarra = data.progressoBarra.currentValue;
    this.vValue = this.progressoBarra + '%';
    }

}
