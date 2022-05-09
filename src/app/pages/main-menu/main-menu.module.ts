import { NgModule } from '@angular/core';
import { PageComponent } from './page/page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { I18N_PROVIDER } from './i18n/_i18n.provider';

@NgModule({
  providers:[
    I18N_PROVIDER
  ],
  declarations: [
    PageComponent
  ],
  imports: [
    SharedModule
  ]
})
export class MainMenuModule { }
