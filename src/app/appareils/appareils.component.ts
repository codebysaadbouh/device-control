import { Component, Input, OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service';

@Component({
  selector: 'app-appareils',
  templateUrl: './appareils.component.html',
  styleUrls: ['./appareils.component.css']
})
export class AppareilsComponent implements OnInit {
  @Input() appareilName: string;
  @Input() appareilStatus: string ;
  @Input() indexOfAppareil : number;
  @Input() id: number;

  constructor(
    private appareilService : AppareilService) {
  }

  ngOnInit(): void {
  }

  getStatus(){
    return this.appareilStatus;
  }
  getColor(){
    if (this.appareilStatus === 'allumé'){
      return 'green';
    }else if (this.appareilStatus === 'éteint'){
      return 'red';
    }
  }

  onSwitchOn(){
    this.appareilService.switchOnOne(this.indexOfAppareil);
  }

  onSwitchOff(){
    this.appareilService.switchOffOne(this.indexOfAppareil);
  }

}