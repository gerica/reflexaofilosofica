import { Reflexao } from './../shared/entidade/reflexao';
import { ReflexaoService } from './../shared/service/reflexao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ref-fil-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  providers: [ReflexaoService]
})
export class HomeComponent implements OnInit {
  reflexao: Reflexao;
  mostrarReflexao: boolean = true;

  constructor(private refService: ReflexaoService) { }

  ngOnInit() {
  }

  public onGetReflexao(): void {
    this.reflexao = this.refService.getReflexao();
  }

  public onMudarMostrarReflexao(): void {
    this.mostrarReflexao = false;
  }

}
