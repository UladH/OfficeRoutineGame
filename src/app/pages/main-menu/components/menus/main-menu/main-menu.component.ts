import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Size } from 'src/app/core/constants/enums/size.enum';

@Component({
  selector: 'org-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainMenuComponent {
  public readonly SIZE = Size;
  
  @Output() onOptionsMenuSelect = new EventEmitter<Event>();

  //#region  constructor

  constructor() { }

  //#endregion

  //#region handlers

  public onOptionsClickHandler($event: Event): void{
    this.onOptionsMenuSelect.emit($event);
  }

  //#endregion

}
