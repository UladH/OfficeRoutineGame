import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[orgTemplate]'
})
export class OrgTemplateDirective {
    
  @Input('orgTemplate') name: string = '';

  //#region  constructor
  
  constructor(private template: TemplateRef<any>) {}

  //#endregion

  //#region  public
  
  public getType(): string {
    return this.name;
  }

  public getTemplate(): TemplateRef<any>{
    return this.template;
  }
  
  //#endregion
}
