import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'suma'
})
export class SumaPipe implements PipeTransform {

  transform(primerNumero: number): any {
    return Math.pow(primerNumero, 2);
  }

}
