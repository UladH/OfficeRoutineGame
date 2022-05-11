import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OrgTemplateDirective } from './directives/org-template.directive';

@NgModule({
  declarations: [
    OrgTemplateDirective
  ],
  imports: [
    CommonModule,
    FlexLayoutModule

  ],
  exports:[
    CommonModule,
    FlexLayoutModule,

    OrgTemplateDirective
  ]
})
export class CoreModule { }
