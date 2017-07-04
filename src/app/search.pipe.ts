import { Pipe, PipeTransform } from '@angular/core';
import {Workshop} from "./Workshop";

@Pipe({name: 'search'})
export class SearchPipe implements PipeTransform {
  transform(workshops: Workshop[], arg: any): Workshop[] {
    let filteredWorkshops: Workshop[] = [];
    // Wenn arg ein string ist
    for (var _i = 0; _i < workshops.length; _i++) {
      let workshop = workshops[_i];
      if (workshop.name.toLowerCase().includes(arg.toLowerCase())) {
        filteredWorkshops.push(workshop);
      }
    }
    return filteredWorkshops;
  }
}

