import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TvaCService {

  constructor() { }

  getTva(value: number){
    return value * 0.20;
  }
}
