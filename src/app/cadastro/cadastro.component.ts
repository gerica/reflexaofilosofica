import { ReflexaoService } from './../shared/service/reflexao.service';
import { Reflexao } from './../shared/entidade/reflexao';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ref-fil-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.less'],
  providers: [ReflexaoService]
})
export class CadastroComponent implements OnInit {

  /*Variaveis*/

  activeForm: boolean = true;
  reflexao: Reflexao;


  /**
   * Construtor
   */
  constructor(private reflexaoService: ReflexaoService) {

  }

  /**
   * Método chamado quando esse componente iniciar
   */
  public ngOnInit(): void {
    this.reflexao = new Reflexao();

  }

  public novo() {
    this.activeForm = false;
    setTimeout(() => this.activeForm = true, 0);
    this.reflexao = new Reflexao();
  }

  /**
 * Grava
 */
  public gravar(event: any): void {
    event.preventDefault();
    this.reflexaoService.gravar(this.reflexao);
    this.novo();

  }

  public excluir(event: any): void {
    event.preventDefault();

  }

}
