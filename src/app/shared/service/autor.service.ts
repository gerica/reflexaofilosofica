import { Reflexao } from './../entidade/reflexao';
import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

const URL_FIRE_BASE: string = 'https://reflexao-filosofica.firebaseio.com/relexao.json';

@Injectable()
export class AutorService {
  autores: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) {
    this.autores = this.af.database.list('/autores');
  }

  public recuperarAutores(): FirebaseListObservable<any> {
    return this.autores;
  }

  public recuperarNomeAutor(reflexao: Reflexao): void {
    // this.af.database.object('/autores/' + reflexao.autor).subscribe(
    //   autor => {
    //     reflexao.autorNome = autor.$value;
    //     console.log(reflexao);
    //   }
    // );
    this.autores.subscribe(
      aut => {
        aut.forEach(el => {          
          if (parseInt(el.$key) === reflexao.autor) {
            reflexao.autorNome = el.$value;
          }
        });
      }
    );
    // console.log(this.autores);
  }
}

