import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AbstractButtonComponent } from '../abstract-button/abstract-button.component';

@Component({
  selector: 'org-outline-button',
  templateUrl: './outline-button.component.html',
  styleUrls: ['./outline-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OutlineButtonComponent extends AbstractButtonComponent{
  @Input() label: string = '';

  //#region  constructor

  constructor() { 
    super();
  }

  //#endregion
}
