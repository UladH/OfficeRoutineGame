import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { LoggerService } from 'src/app/core/services/logger/logger.service';
import { MenuCardComponent } from '../components/menu-card/menu-card.component';
import { SubMenu } from './constants/submenu.enum';

@Component({
  selector: 'org-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageComponent{
  public readonly SUB_MENU = SubMenu;

  public currentSubMenu: SubMenu | null = null;

  @ViewChild(MenuCardComponent) menuCardComponent!: MenuCardComponent;  
  
  //#region  constructor

  constructor(
    private logger: LoggerService
  ) { }

  //#endregion

  //#region handlers

  public onOptionsSelectHandler($event: Event): void{
    this.logger.info("Options menu selected");

    this.currentSubMenu = SubMenu.Options;
    this.menuCardComponent.flip();
  }
  
  public onOptionsCloseHandler($event: Event): void{
    this.logger.info("Return to main menu from options");

    this.currentSubMenu = null;
    this.menuCardComponent.flip();
  }

  //#endregion
}
