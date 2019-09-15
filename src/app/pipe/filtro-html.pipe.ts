import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class FiltroHtmlPipe implements PipeTransform {

  constructor(private sanitized: DomSanitizer) { }
  
  transform(value: any) {
    return this.sanitized.bypassSecurityTrustScript(value);
  }

}
