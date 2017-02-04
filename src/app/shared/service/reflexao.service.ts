import { Injectable, OnInit } from '@angular/core';
import { Reflexao } from './../entidade/reflexao';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

const reflexoes: Reflexao[] = [
  // new Reflexao('Friedrich Nietzsche',
  //   'O que se pode prometer',
  //   'Pode-se prometer atos, mas não sentimentos; pois estes são involuntários. Quem promete a alguém amá-lo sempre, ou sempre odiá-lo ou ser-lhe sempre fiel, promete algo que não está em seu poder; no entanto, pode prometer aqueles atos que normalmente são consequência do amor, do ódio, da fidelidade,  as também podem nascer de outros motivos: pois caminhos e motivos diversos conduzem a um ato. A promessa de sempre amar alguém significa, portanto: enquanto eu te amar, demonstrarei com atos o meu amor; se eu não mais te amar, continuarei praticando esses mesmos atos, ainda que por outros motivos:  e modo que na cabeça de nossos semelhantes permanece a ilusão de que o amor é imutável e sempre o mesmo. —  Portanto, prometemos a continuidade da aparência do amor quando, sem cegar a nós mesmos,juramos a alguém amor eterno'),
  // new Reflexao('Friedrich Nietzsche',
  //   'Amor e justiça',
  //   'Por que superestimamos o amor em detrimento da justiça e dizemos dele as coisas mais belas, como se fosse algo muito superior a ela? Não será ele visivelmente mais estúpido? — Sem dúvida, mas justamente por isso mais agradável para todos. O amor é estúpido e possui uma abundante cornucópia; dela retira e distribui seus dons a cada pessoa, ainda que ela não os mereça, nem sequer os agradeça. Ele é imparcial como a chuva, que, segundo a Bíblia e a experiência, molha até os ossos não apenas o injusto, mas ocasionalmente também o justo.'),
  // new Reflexao('Friedrich Nietzsche',
  //   'Liberalidade proibida',
  //   'Não há no mundo amor e bondade bastantes para que ainda possamos dá-los a seres imaginários.'),
  // new Reflexao('Friedrich Nietzsche',
  //   'Uma doença masculina',
  //   'Para a doença masculina do autodesprezo o remédio mais seguro é ser amado por uma mulher inteligente'),
  // new Reflexao('Friedrich Nietzsche',
  //   'Uma espécie de ciúme',
  //   'É fácil as mães sentirem ciúme dos amigos de seus filhos, quando eles têm sucesso extraordinário. Habitualmente a mãe ama, em seu filho, mais a si mesma do que ao próprio filho'),
  // new Reflexao('Friedrich Nietzsche',
  //   'Suspiros diversos',
  //   'Alguns homens suspiraram pelo rapto de suas mulheres; a maioria, porque ninguém as quis raptar.')

];

const URL_FIRE_BASE: string = 'https://reflexao-filosofica.firebaseio.com/relexao.json';

@Injectable()
export class ReflexaoService implements OnInit {
  reflexoes: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) {
    this.reflexoes = this.af.database.list('/reflexoes');
  }
  ngOnInit() {
    // this.reflexoes = this.af.database.list('/reflexoes');
  }

  public getReflexao(): Reflexao {
    let index: number = Math.round(Math.random() * 5);
    // console.log(index);
    
    return reflexoes[index];
  }


  public gravar(reflexao: Reflexao): void {
    // console.log(this.reflexoes);
    this.reflexoes.push(reflexao);
  }

  public recuperarReflexoes(): Observable<any> {
    return this.reflexoes;
  }

}

