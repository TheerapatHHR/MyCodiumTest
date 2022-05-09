import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'check'
})
export class CheckPipe implements PipeTransform{
  transform(value: any) {
    if (value.status == true){
      return 'Finish';
    }
    return 'Unfinish';
  }
}
