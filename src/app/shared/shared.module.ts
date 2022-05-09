import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { TextButtonComponent } from './buttons/text-button/text-button.component';

@NgModule({
  declarations: [
    TextButtonComponent
  ],
  imports: [
    CoreModule
  ],
  exports: [
    CoreModule,

    TextButtonComponent
  ]
})
export class SharedModule { }
