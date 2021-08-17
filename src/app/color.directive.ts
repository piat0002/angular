import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {
  el : ElementRef;
  constructor(elm : ElementRef) { 
    this.el = elm
    //this.el.nativeElement.style.backgroundColor = 'blue'
    console.log("la construction de colordirective")
    //this.RchangeColor()
  }
  

  private etatRecusive = 0;

  private changeColor(value: String){

    this.el.nativeElement.style.backgroundColor = value
  }

  private colors = '';
  @Input()
  set Color(value: string){
      this.colors = value;
    }

  @HostListener('mouseenter') onMEnter() {
    this.etatRecusive = 1
    this.changeColor(this.colors);
  }

  @HostListener('mouseleave') onMLeave() {
    this.etatRecusive = 0
    //this.changeColor('');
  }

  private RchangeColor(){
    console.log(this.colors)
    if(this.etatRecusive !== 1){
      this.el.nativeElement.style.backgroundColor = `rgb(${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)})`
    }
    
    //console.log("test")
    setTimeout(()=> {this.RchangeColor()} ,400)
    //setTimeout(()=> {this.changeColor} ,100)
    // setTimeout(() => {
    // self.changeColor
    // },1000)
  }
}
