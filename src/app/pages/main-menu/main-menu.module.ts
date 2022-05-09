import { NgModule } from '@angular/core';
import { PageComponent } from './page/page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { I18N_PROVIDER } from './i18n/_i18n.provider';
import { MainMenuRoutingModule } from './main-menu-routing.module';
import { TranslocoModule } from '@ngneat/transloco';
import { LogoComponent } from './components/logo/logo.component';

@NgModule({
  providers:[
    I18N_PROVIDER
  ],
  declarations: [
    PageComponent,
    LogoComponent
  ],
  imports: [
    MainMenuRoutingModule,
    TranslocoModule,
    SharedModule
  ]
})
export class MainMenuModule { }
