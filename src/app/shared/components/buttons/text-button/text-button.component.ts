import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Color } from 'src/app/core/constants/enums/color.enum';
import { Size } from 'src/app/core/constants/enums/size.enum';

@Component({
  selector: 'org-text-button',
  templateUrl: './text-button.component.html',
  styleUrls: ['./text-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextButtonComponent {
  @Input() label: string = '';
  @Input() size: Size | string = Size.M;
  @Input() color: Color | string = Color.Primary;

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

  //#region private

  private getSizeClass(): string{
    return `org-button-${this.size.toLowerCase()}`;
  }

  private getColorClass(): string{
    return `org-button-${this.color.toLowerCase()}`;
  }

  //#endregion
}
