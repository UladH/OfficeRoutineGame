import { AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, QueryList, TemplateRef} from '@angular/core';
import { OrgTemplateDirective } from 'src/app/core/directives/org-template.directive';
import { MenuCardTemplateType } from './constants/menu-card-template-type.enum';

@Component({
  selector: 'org-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: [
    'styles/menu-card.component.scss',
    'styles/menu-card-mobile.component.scss'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuCardComponent implements AfterContentInit{
  public isFlipped: boolean = false;

  public frontTemplate: TemplateRef<any> | null = null;
  public backTemplate: TemplateRef<any> | null = null;

  @ContentChildren(OrgTemplateDirective) templates: QueryList< OrgTemplateDirective> = new QueryList<OrgTemplateDirective>() ;
  
  //#region constructor

  constructor(private cdr: ChangeDetectorRef) { }

  //#endregion

  //#region implement AfterContentInit

  public ngAfterContentInit(): void {    
    this.templates.forEach((item) => {
      const type = item.getType().toLowerCase();

      switch(type) {
        case MenuCardTemplateType.Front:
          this.frontTemplate = item.template;
          break;
        case MenuCardTemplateType.Back:
          this.backTemplate = item.template;
          break;
        default:
          this.frontTemplate = item.template;
          break;
      }
    });
  }

  //#endregion

  //#region public

  public flip(): void{
    this.isFlipped = !this.isFlipped;
    this.cdr.markForCheck();
  }

  //#endregion
}
