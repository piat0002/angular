import { Injectable } from '@angular/core';
import { TvaCService } from './tva-c.service';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  constructor(private calculator : TvaCService) { }

  getfacture(prix:number,nom:string,prenom:string)
  {
    return {id : Math.round(Math.random()*100),
            ht : prix,
            ttc :  this.calculator.getTva(prix),
            date : Date.now,
            nom : nom,
            prenom : prenom
          }
  }
}
