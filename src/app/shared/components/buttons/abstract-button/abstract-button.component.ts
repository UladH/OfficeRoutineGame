import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Color } from 'src/app/core/constants/enums/color.enum';
import { Size } from 'src/app/core/constants/enums/size.enum';

@Component({
  template: ''
})
export abstract class AbstractButtonComponent {
  @Input() size: Size = Size.M;
  @Input() color: Color = Color.Primary;

  @Output() onClick = new EventEmitter<Event>();

  //#region  constructor

  constructor() { }

  //#endregion

  //#region public

  public getComponentClasses(): string[]{
    return [
      this.getSizeClass(),
      this.getColorClass()
    ];
  }

  //#endregion

  //#region handlers

  public onClickHandler($event: Event): void{
    this.onClick.emit($event);
  }

  //#endregion

  //#region protected

  protected getSizeClass(): string{
    return `org-button-${this.size.toLowerCase()}`;
  }

  protected getColorClass(): string{
    return `org-button-${this.color.toLowerCase()}`;
  }

  //#endregion
}
