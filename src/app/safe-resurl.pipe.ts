import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'safeResUrl'
})
export class SafeResurlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer){}

  transform(url) {
    console.log("hi");
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
