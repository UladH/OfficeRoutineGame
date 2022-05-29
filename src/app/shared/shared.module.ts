import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { TextButtonComponent } from './components/buttons/text-button/text-button.component';
import { CardStructureComponent } from './components/cards/card-structure/card-structure.component';
@NgModule({
  declarations: [
    TextButtonComponent,
    CardStructureComponent
  ],
  imports: [
    CoreModule
  ],
  exports: [
    CoreModule,

    TextButtonComponent,
    CardStructureComponent
  ]
})
export class SharedModule { }
