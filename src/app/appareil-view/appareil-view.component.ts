import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppareilService} from '../services/appareil.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit, OnDestroy {

  isAuth = false;
  last_update = new Promise(
    (resolve, reject) => {
      const date = new Date();
      setTimeout(() => {
          resolve(date);
        },2000
      );
    }
  );

  appareils : any[];
  appareilsSubscription: Subscription;


  constructor(private appareilService : AppareilService){

    setTimeout(
      () => {
        this.isAuth = true;
      }, 2000
    )
  }

  ngOnInit() {
    //Il sera executer au moment de la création du component et après l'exec du constructor
    this.appareilsSubscription = this.appareilService.appareilSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
    );
    this.appareilService.emitAppareilSubject();
  }

  onAllumer(){
    console.log("On allume tout !");
    this.appareilService.switchOnAll();
  }
  onEteindre(){
    if(confirm('Êtes-vous sûre de vouloir éteindre tous vos apparaeils ?')){
      this.appareilService.switchOffAll();
    }
  }

  ngOnDestroy(): void {
    this.appareilsSubscription.unsubscribe();
  }



}
