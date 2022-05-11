import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { MenuCardComponent } from '../components/menu-card/menu-card.component';

@Component({
  selector: 'org-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageComponent{

  @ViewChild(MenuCardComponent) menuCardComponent!: MenuCardComponent;
  
  //#region  constructor

  constructor() { }

  //#endregion

  //#region handlers

  public onOptionsSelectHandler($event: Event): void{
    this.menuCardComponent.flip();
  }

  //#endregion
}
