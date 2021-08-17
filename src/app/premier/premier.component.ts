import { Component, OnInit } from '@angular/core';
import { FactureService } from '../facture.service';
import { TvaCService } from '../tva-c.service';

@Component({
  selector: 'yonathan',
  templateUrl: './premier.component.html',
  styleUrls: ['./premier.component.scss']
})
export class PremierComponent implements OnInit {
  public variable = 'lol';

  public chiffre = '0.2em';

  public isspecial = true;

  public isActif = true;


  private idfacture = 0;
  constructor(private calculator : TvaCService, private facture : FactureService) { }
  private price = 30;

  changeprice(value:string){
    this.price = parseFloat(value)
  }

  gettotaltalprice(){
    return this.price + this.calculator.getTva(this.price);
  }

  public myValue = 0;

  public myStyles = {
    'font-style': 'italic',
    'font-size': '3em'};
  
  public theclick(event : Event){
    console.log(event);
  }

  public callPhone(value : String){
    console.log(value)
  }

  public changeRandomMyValue(){
    this.myValue = Math.round(Math.random()*5)
  } 

  public band = [     
    {name: "Kokoro"},
    {name: "Kanon"},
    {name: "Hagumi"},
    {name: "kauru"},
    {name: "Misaki"}
  ];

  public getFacture(){
    const objet = this.facture.getfacture(200,"Truc","Rudy")
    return `numero:${objet.id} acheteur:${objet.nom} ${objet.prenom} pric ht:${objet.ht} prix ttc:${objet.ttc}`
  }

  getObj(){
    const objet = { taga : 'sog', 'id':Math.random()};
    return objet;
  }
  ngOnInit(): void {
  }

  
}
