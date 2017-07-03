import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'greater'})
export class GreaterPipe implements PipeTransform {
  transform(values: number[], arg: number): number[] {
    return values.filter(element => element > arg);
  }
}
