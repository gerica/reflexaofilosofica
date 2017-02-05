import { Injectable } from '@angular/core';
import { Reflexao } from './../entidade/reflexao';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

const URL_FIRE_BASE: string = 'https://reflexao-filosofica.firebaseio.com/relexao.json';

@Injectable()
export class ReflexaoService {
  reflexoes: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) {
    this.reflexoes = this.af.database.list('/reflexoes');
    // this.reflexoes.subscribe(
    //   refs => {
    //     refs.map(ref => {
    //       this.af.database.object('/autores/' + ref.autor).subscribe(
    //         autor=>{
    //           ref.autorNome = autor.$value;
    //         }
    //       );          
    //     });
    //   }
    // );
  }

  public getReflexao(): Reflexao {
    let index: number = Math.round(Math.random() * 5);
    return this.reflexoes[index];
  }


  public gravar(reflexao: Reflexao): void {
    // console.log(this.reflexoes);
    this.reflexoes.push(reflexao);
  }

  public recuperarReflexoes(): FirebaseListObservable<any> {
    return this.reflexoes;
  }

}

