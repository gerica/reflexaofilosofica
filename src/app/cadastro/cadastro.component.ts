import { AlertaUtil } from './../shared/component/alerta-util';
import { AutorService } from './../shared/service/autor.service';
import { Autor } from './../shared/entidade/autor';
import { ReflexaoService } from './../shared/service/reflexao.service';
import { Reflexao } from './../shared/entidade/reflexao';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ref-fil-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.less'],
  providers: [ReflexaoService, AutorService]
})
export class CadastroComponent implements OnInit {

  /*Variaveis*/
  alertaUtil: AlertaUtil = new AlertaUtil();
  activeForm: boolean = true;
  reflexao: Reflexao;
  autores: Autor[] = [];


  /**
   * Construtor
   */
  constructor(private reflexaoService: ReflexaoService,
    private autorService: AutorService) {

  }

  /**
   * Método chamado quando esse componente iniciar
   */
  public ngOnInit(): void {
    this.reflexao = new Reflexao();
    this.recuperarAutores();

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
    this.alertaUtil.addMessage({
      type: 'success',
      closable: true,
      msg: `Operação realizada com sucesso`
    });
    this.novo();
  }

  public excluir(event: any): void {
    event.preventDefault();
  }

  public recuperarAutores(): void {
    this.autorService.recuperarAutores().subscribe(
      (data: Autor[]) => {
        this.autores = data;

      },
      error => {
        console.log(error);
      }

    );
  }

}

