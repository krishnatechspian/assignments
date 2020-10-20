import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'tableValues'
})
export class TablesValuesPipe implements PipeTransform {
  // tslint:disable-next-line: typedef
  transform(obj: any) {
    const result = [];
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        result.push(obj[key]);
      }
    }
    return result;
  }
}
