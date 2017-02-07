import { Reflexao } from './../entidade/reflexao';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroReflexao'
})
export class ReflexaoPipe implements PipeTransform {

  transform(reflexoes: Reflexao[], digitado: string) {
    if (!digitado) {
      return reflexoes;
    }

    return reflexoes.filter((item: any) => {
      for (let key in item) {
        if ((typeof item[key] === 'string' || item[key] instanceof String) &&
          (item[key].toUpperCase().indexOf(digitado.toUpperCase()) !== -1)) {
          return true;
        }
      }
      return false;
    });
  }

}
