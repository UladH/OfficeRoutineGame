import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'org-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoComponent {

  //#region constructor

  constructor() { }

  //#endregion

}
