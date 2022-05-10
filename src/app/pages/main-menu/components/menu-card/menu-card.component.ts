import { ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'org-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: [
    'styles/menu-card.component.scss',
    'styles/menu-card-mobile.component.scss'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuCardComponent {

  //#region constructor

  constructor() { }

  //#endregion
}
