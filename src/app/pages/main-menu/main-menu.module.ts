import { NgModule } from '@angular/core';
import { PageComponent } from './page/page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { I18N_PROVIDER } from './i18n/_i18n.provider';
import { MainMenuRoutingModule } from './main-menu-routing.module';
import { TranslocoModule } from '@ngneat/transloco';
import { LogoComponent } from './components/logo/logo.component';
import { MenuCardComponent } from './components/menu-card/menu-card.component';
import { MainMenuComponent } from './components/menus/main-menu/main-menu.component';
import { OptionsMenuComponent } from './components/menus/options-menu/options-menu.component';

@NgModule({
  providers:[
    I18N_PROVIDER
  ],
  declarations: [
    PageComponent,
    LogoComponent,
    MenuCardComponent,
    MainMenuComponent,
    OptionsMenuComponent
  ],
  imports: [
    MainMenuRoutingModule,
    TranslocoModule,
    SharedModule
  ]
})
export class MainMenuModule { }
