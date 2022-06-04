import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Size } from 'src/app/core/constants/enums/size.enum';

@Component({
  selector: 'org-options-menu',
  templateUrl: './options-menu.component.html',
  styleUrls: ['./options-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OptionsMenuComponent {
  public readonly SIZE = Size;
  
  @Output() onClose = new EventEmitter<Event>();

  //#region constructor

  constructor() { }

  //#endregion
  
  //#region handlers

  public onCloseClickHandler($event: Event): void{
    this.onClose.emit($event);
  }

  //#endregion
}
