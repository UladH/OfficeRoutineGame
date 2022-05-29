import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
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

  public currentSubMenu?: SubMenu;

  @ViewChild(MenuCardComponent) menuCardComponent!: MenuCardComponent;  
  
  //#region  constructor

  constructor() { }

  //#endregion

  //#region handlers

  public onOptionsSelectHandler($event: Event): void{
    this.currentSubMenu = SubMenu.Options;
    this.menuCardComponent.flip();
  }

  //#endregion
}
