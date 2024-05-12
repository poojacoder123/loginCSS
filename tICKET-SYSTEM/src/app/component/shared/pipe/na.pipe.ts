import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'nA',
  standalone: true
})
export class NAPipe implements PipeTransform {

  transform(value: unknown): unknown {
    if(value !== null && value!== undefined && value !== ""){
      return value
    }
    else{
      return "NA"
    }
    return null;
  }

}
