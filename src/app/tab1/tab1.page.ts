import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  //Variaveis Goblais
  peso!: string;
  altura!: string;
  resultado!: string;

  constructor(){}

  calcular(){

    //variáveis locais
    let p = parseFloat(this.peso);
    let a = parseFloat(this.altura);

    let imc= p / (a * a);

    let result;

    if (imc < 18.5) {
      result = "Abaixo do peso";
    } else if(imc < 25) {
      result = "Peso normal";
    } else {
      result ="Acima do peso";
    }
      this.resultado = result;
  }

}
