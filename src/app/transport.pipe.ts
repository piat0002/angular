import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transport'
})
export class TransportPipe implements PipeTransform {
  
  transform(value: string, a:string,b:string): unknown {
    /*
    var tableau = new Array;
    value.split('').forEach(lettre=>{
      tableau.push(lettre.replace(a,b))
    }) 
    */
    return value.split('').map(x => x.replace(a,b)).join('')
  } 
}
