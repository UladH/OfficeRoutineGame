import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[orgTemplate]'
})
export class OrgTemplateDirective {
    
  @Input('orgTemplate') name: string = '';

  //#region  constructor
  
  constructor(public template: TemplateRef<any>) {}

  //#endregion

  //#region  public
  
  public getType(): string {
    return this.name;
  }
  
  //#endregion
}
