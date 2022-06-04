import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Color } from 'src/app/core/constants/enums/color.enum';
import { Size } from 'src/app/core/constants/enums/size.enum';
import { AbstractButtonComponent } from '../abstract-button/abstract-button.component';

@Component({
  selector: 'org-text-button',
  templateUrl: './text-button.component.html',
  styleUrls: ['./text-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextButtonComponent extends AbstractButtonComponent{
  @Input() label: string = '';

  //#region  constructor

  constructor() { 
    super();
  }

  //#endregion
}
