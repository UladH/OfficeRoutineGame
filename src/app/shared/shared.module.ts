import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { TextButtonComponent } from './components/buttons/text-button/text-button.component';
import { CardStructureComponent } from './components/cards/card-structure/card-structure.component';
import { OutlineButtonComponent } from './components/buttons/outline-button/outline-button.component';

@NgModule({
  declarations: [
    TextButtonComponent,
    CardStructureComponent,
    OutlineButtonComponent,
  ],
  imports: [
    CoreModule
  ],
  exports: [
    CoreModule,

    TextButtonComponent,
    OutlineButtonComponent,
    CardStructureComponent
  ]
})
export class SharedModule { }
