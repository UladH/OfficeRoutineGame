import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'org-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageComponent{

  //#region  constructor

  constructor() { }

  //#endregion
}
