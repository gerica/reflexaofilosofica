import { AutorService } from './../../shared/service/autor.service';
import { ReflexaoService } from './../../shared/service/reflexao.service';
import { Reflexao } from './../../shared/entidade/reflexao';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';

@Component({
  selector: 'ref-fil-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.less'],
  providers: [ReflexaoService, AutorService]
})
export class ListaComponent implements OnInit {

  reflexoes: Reflexao[];
  @ViewChild('modalVisualizar') public modalVisualizar: ModalDirective;
  reflexaoVisualizar: Reflexao;


  constructor(private reflexaoService: ReflexaoService,
    private autorService: AutorService) { }

  ngOnInit() {
    this.recuperarReflexoes();
  }

  public recuperarReflexoes(): void {
    this.reflexaoService.recuperarReflexoes().subscribe(
      (data: Reflexao[]) => {
        this.reflexoes = data;
        this.reflexoes.forEach(el => {
          if (el.conteudo.length > 100) {
            el.conteudoAbrev = el.conteudo.substr(0, 100) + '...';
          } else {
            el.conteudoAbrev = el.conteudo;
          }
          this.autorService.recuperarNomeAutor(el);
        });
      },
      error => {
        console.log(error);
      }
    );
  }

  public showModal(reflexao: Reflexao): void {
    this.reflexaoVisualizar = reflexao;
    this.modalVisualizar.show();
  }

}
