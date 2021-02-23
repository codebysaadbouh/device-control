import {Subject} from 'rxjs';

export class AppareilService {

  appareilSubject = new Subject<any[]>();

  private appareils = [
    {
      id: 0,
      name: 'Smart TV - samsung',
      status : 'éteint'
    },
    {
      id: 1,
      name: 'Lampe - salle à manger',
      status : 'allumé'
    },
    {
      id: 2,
      name: 'Climatiseur - salon',
      status : 'éteint'
    }
  ];

  emitAppareilSubject(){
    //next force le subject à emmettre ce qu'on lui passe comme argument
    //slice pour emettre un copie de appareils
    this.appareilSubject.next(this.appareils.slice())
  }

  //cette fonction va retourner l'appareil correspondant à un id renseigné en paramètre
  getAppareilById(id: number){
    return this.appareils.find(
      (appareilObject) => {
        return appareilObject.id === id;
      }
    );
  }

  switchOnAll(){
     for(let appareil of this.appareils) {
       appareil.status = 'allumé';
     }
     this.emitAppareilSubject();
  }

  switchOffAll(){
    for(let appareil of this.appareils) {
      appareil.status = 'éteint';
    }
    this.emitAppareilSubject();
  }

  switchOnOne(index: number){
    this.appareils[index].status = 'allumé';
    this.emitAppareilSubject()
  }

  switchOffOne(index: number){
    this.appareils[index].status = 'éteint';
    this.emitAppareilSubject();
  }

  addAppareil(name: string, status: string){
    const appareilObject = {
      id:0,
      name: '',
      status: ''
    };
    appareilObject.name = name;
    appareilObject.status = status;
    appareilObject.id  = this.appareils[(this.appareils.length -1)].id +1;
    this.appareils.push(appareilObject);
    this.emitAppareilSubject();
  }

}
