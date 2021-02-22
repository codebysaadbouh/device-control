export class AppareilService {

  appareils = [
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
  }

  switchOffAll(){
    for(let appareil of this.appareils) {
      appareil.status = 'éteint';
    }
  }

  switchOnOne(index: number){
    this.appareils[index].status = 'allumé';
  }

  switchOffOne(index: number){
    this.appareils[index].status = 'éteint';
  }
}
