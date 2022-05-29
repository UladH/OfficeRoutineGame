import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, Input, OnInit, QueryList, TemplateRef } from '@angular/core';
import { HorizontalPosition } from 'src/app/core/constants/enums/horizontal-position.enum';
import { OrgTemplateDirective } from 'src/app/core/directives/org-template.directive';
import { CardTemplateType } from './constants/card-temlate-type.enum';

@Component({
  selector: 'org-card-structure',
  templateUrl: './card-structure.component.html',
  styleUrls: ['./card-structure.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardStructureComponent implements OnInit {
  @Input() header: string = '';
  @Input() footer: string = '';
  @Input() headerPosition : HorizontalPosition | string = HorizontalPosition.Left;
  @Input() footerPosition : HorizontalPosition | string = HorizontalPosition.Left;
  
  @ContentChildren(OrgTemplateDirective) templates: QueryList< OrgTemplateDirective> = new QueryList<OrgTemplateDirective>() ;
  
  public headerTemplate: TemplateRef<any> | null = null;
  public bodyTemplate: TemplateRef<any> | null = null;
  public footerTemplate: TemplateRef<any> | null = null;

  //#region constructor

  constructor(private cdr: ChangeDetectorRef) { }

  //#endregion

  //#region implements OnInit
  
  public ngOnInit(): void {
  }
  
  //#endregion

  //#region implement AfterContentInit

  public ngAfterContentInit(): void {    
    this.templates.forEach((item) => {
      const type = item.getType().toLowerCase();
  
      switch(type) {
        case CardTemplateType.Header:
          this.headerTemplate = item.getTemplate();
          break;
        case CardTemplateType.Body:
          this.bodyTemplate = item.getTemplate();
          break;
        case CardTemplateType.Footer:
          this.footerTemplate = item.getTemplate();
          break;
        default:
          this.bodyTemplate = item.getTemplate();
          break;
      }
    });
  }
  
  //#endregion

  //#region public

  public getHeaderClasses(): string[]{
    return [
      this.getTextPositionClass(this.headerPosition)
    ];
  }
  
  public getFooterClasses(): string[]{
    return [
      this.getTextPositionClass(this.footerPosition)
    ];
  }

  //#endregion

  //#region private

  private getTextPositionClass(position: HorizontalPosition | string): string{
    return `org-card-text-${position}`;
  }

  //#endregion
}
