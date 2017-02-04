import { Reflexao } from './../shared/entidade/reflexao';
import { ReflexaoService } from './../shared/service/reflexao.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ref-fil-reflexao',
  templateUrl: './reflexao.component.html',
  styleUrls: ['./reflexao.component.less'],
  providers: [ReflexaoService]
})
export class ReflexaoComponent implements OnInit {
  @Input()
  reflexao: Reflexao;
  reflexoes: Reflexao[] = [];

  constructor(private refService: ReflexaoService) { }

  ngOnInit() {
    this.onGetNext();
  }

  onGetNext(): void {
    this.refService.recuperarReflexoes().subscribe(
      (data: Reflexao[]) => {
        this.reflexoes = data;
        this.getReflexao();
      },
      error => {
        console.log(error);
      }
    );
  }
  
  public getReflexao(): void {
    
    if (this.reflexoes.length > 0) {
      let index: number = Math.round(Math.random() * (this.reflexoes.length - 1));      
      this.reflexao = this.reflexoes[index];
    } else {
      this.reflexao = null;
    }

    // console.log(this.reflexao);
  }

}

